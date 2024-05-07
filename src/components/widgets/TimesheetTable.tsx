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

const TimesheetTable = () => {
  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/timesheets');
        setTimesheets(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load timesheets:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      id: 'date' // Added unique ID for keying purposes
    },
    {
      accessorKey: 'clockIn',
      header: 'Start Time',
      cell: (info) => formatTime(info.getValue() as string),
      id: 'start_time' // Added unique ID for keying purposes
    },
    {
      accessorKey: 'clockOut',
      header: 'End Time',
      cell: (info) => (info.getValue() ? formatTime(info.getValue() as string) : 'N/A'),
      id: 'end_time' // Ensure unique ID for keying purposes
    },
    {
      accessorKey: 'duration',
      header: 'Total Hours',
      cell: (info) => (info.getValue() ? ((info.getValue() as number) / 3600).toFixed(2) + ' hrs' : 'N/A'),
      id: 'total_hours' // Ensure unique ID for keying purposes
    },
  ], []);

  const table = useReactTable({
    data: timesheets,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <div>Loading...</div>;

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
