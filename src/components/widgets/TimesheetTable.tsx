// src/components/widgets/TimesheetTable.tsx
'use client';
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { ColumnDef, useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export type Timesheet = {
  id: number;
  clockIn: string;
  clockOut: string | null;
  duration: number;
};

interface TimesheetTableProps {
  startDate: Date | null;
  endDate: Date | null;
}

const TimesheetTable: React.FC<TimesheetTableProps> = ({ startDate, endDate }) => {
  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const [filteredTimesheets, setFilteredTimesheets] = useState<Timesheet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await axios.get('/api/timesheets');
        console.log('Data fetched:', response.data);
        setTimesheets(response.data);
        filterTimesheets(response.data, startDate, endDate);
      } catch (error) {
        console.error('Failed to load timesheets:', error);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  const filterTimesheets = (timesheets: Timesheet[], startDate: Date | null, endDate: Date | null) => {
    console.log('Filtering for dates:', startDate, endDate);

    if (!startDate && !endDate) {
      console.log('No dates provided, showing all timesheets.');
      setFilteredTimesheets(timesheets);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);  // Set end time to the end of the day

    const filteredData = timesheets.filter(timesheet => {
      const clockInDate = new Date(timesheet.clockIn);
      return clockInDate >= start && clockInDate <= end;
    });

    console.log('Filtered data:', filteredData);
    setFilteredTimesheets(filteredData);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid Time' : date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const columns: ColumnDef<Timesheet>[] = useMemo(() => [
    {
      accessorKey: 'clockIn',
      header: 'Date',
      cell: (info) => formatDate(info.getValue() as string),
      id: 'date'
    },
    {
      accessorKey: 'clockIn',
      header: 'Start Time',
      cell: (info) => formatTime(info.getValue() as string),
      id: 'start_time'
    },
    {
      accessorKey: 'clockOut',
      header: 'End Time',
      cell: (info) => (info.getValue() ? formatTime(info.getValue() as string) : 'N/A'),
      id: 'end_time'
    },
    {
      accessorKey: 'duration',
      header: 'Total Hours',
      cell: (info) => (info.getValue() ? ((info.getValue() as number) / 3600).toFixed(2) + ' hrs' : 'N/A'),
      id: 'total_hours'
    },
  ], []);

  const table = useReactTable({
    data: filteredTimesheets,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <TableRow key={`${row.original.id}_${rowIndex}`}>
              {row.getVisibleCells().map((cell, cellIndex) => (
                <TableCell key={`${row.original.id}_${cell.column.id}_${cellIndex}`}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TimesheetTable;
