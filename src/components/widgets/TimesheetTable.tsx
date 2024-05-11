'use client';
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '~/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption, TableFooter } from '../ui/table';
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight, Info, Download, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';
import { formatTime, formatDate, formatDuration, downloadFile } from '~/utils/TimesheetUtils';
import { Timesheet, TimesheetTableProps } from '~/shared/types';


const TimesheetTable: React.FC<TimesheetTableProps> = ({ startDate, endDate }) => {
  const [filteredTimesheets, setFilteredTimesheets] = useState<Timesheet[]>([]);
  // Initialize sorting with a default column
  const [sorting, setSorting] = useState<SortingState>([{ id: 'date', desc: false }]);  // Default sort by 'date' ascending

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/timesheets');
        filterTimesheets(response.data, startDate, endDate);
      } catch (error) {
        console.error('Failed to load timesheets:', error);
      }
    };
    fetchData();
  }, [startDate, endDate]);


  const downloadCSV = (includeHeaders: boolean) => {
    const headers = includeHeaders ? 'Date,Start Time,End Time,Total Hours\n' : '';
    const csvData = headers + filteredTimesheets.map(timesheet =>
      `${formatDate(timesheet.clockIn)},${formatTime(timesheet.clockIn)},${formatTime(timesheet.clockOut || '')},${formatDuration(timesheet.duration)}`).join('\n');
    downloadFile(csvData, 'timesheet.csv', 'text/csv;charset=utf-8;');
  };

  const downloadJSON = () => {
    const jsonData = JSON.stringify(filteredTimesheets, null, 2);
    downloadFile(jsonData, 'timesheet.json', 'application/json');
  };

  const filterTimesheets = (timesheets: Timesheet[], startDate: Date | null, endDate: Date | null) => {
    console.log('Filtering for dates:', startDate, endDate);

    if (!startDate || !endDate) {
      console.log('No valid dates provided, showing all timesheets.');
      setFilteredTimesheets(timesheets);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    const filteredData = timesheets.filter(timesheet => {
      const clockInDate = new Date(timesheet.clockIn);
      return clockInDate >= start && clockInDate <= end;
    });

    console.log('Filtered data:', filteredData);
    setFilteredTimesheets(filteredData);
  };

  const totalHoursSum = useMemo(() => {
    return filteredTimesheets.reduce((total, current) => total + (current.duration || 0), 0);
  }, [filteredTimesheets]);
  // TODO The toggleSorting const gives the following ESLint Error
  // TODO ESLint: The 'toggleSorting' function makes the dependencies of useMemo Hook (at line 133) change on every render. Move it inside the useMemo callback. Alternatively, wrap the definition of 'toggleSorting' in its own useCallback() Hook.(react-hooks/exhaustive-deps)
  const toggleSorting = (columnId: string) => {
    const isDesc = sorting.find(s => s.id === columnId)?.desc;
    setSorting([{ id: columnId, desc: !isDesc }]);
  };

  const columns: ColumnDef<Timesheet>[] = useMemo(() => [
    {
      accessorKey: 'clockIn',
      header: () => {
        const sortStatus = sorting.find(s => s.id === 'date');
        const direction = sortStatus?.desc ? <ChevronDown /> : <ChevronUp />;
        return (
          <div onClick={() => setSorting([{ id: 'date', desc: !sortStatus?.desc }])} className="flex items-center cursor-pointer select-none">
            Date {sortStatus && direction}
          </div>
        );
      },
      cell: (info) => formatDate(info.getValue() as string),
      id: 'date',
      enableSorting: true,
    },
    {
      accessorKey: 'clockIn',
      header: 'Start Time',
      cell: (info) => formatTime(info.getValue() as string),
      id: 'start_time',
    },
    {
      accessorKey: 'clockOut',
      header: 'End Time',
      cell: (info) => (info.getValue() ? formatTime(info.getValue() as string) : 'N/A'),
      id: 'end_time',
    },
    {
      accessorKey: 'duration',
      header: () => {
        const sortStatus = sorting.find(s => s.id === 'total_hours');
        const direction = sortStatus?.desc ? <ChevronDown color="#fdf2f2" /> : <ChevronDown color="#fdf2f2" />;
        console.log("Rendering Total Hours Sort Icon: ", sortStatus?.desc ? "Descending" : "Ascending");
        return (
          <div onClick={() => toggleSorting('total_hours')} className="flex items-center cursor-pointer select-none">
            Total Hours {sortStatus && direction}
          </div>
        );
      },
      cell: (info) => (info.getValue() ? ((info.getValue() as number) / 3600).toFixed(2) + ' hrs' : 'N/A'),
      id: 'total_hours',
      enableSorting: true,
    },
  ], [sorting]);



  const table = useReactTable({
    columns,
    data: filteredTimesheets,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <div>
      <div className="p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"
                    className="bg-primary-500 dark:bg-secondary-800 text-black dark:text-white rounded hover:bg-blue-600">
              <Download className="mr-2" size={16} /> Export Data
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white dark:bg-secondary-800 text-black dark:text-white shadow-md rounded p-1">
            <DropdownMenuLabel className="text-gray-700 dark:text-white dark:font-extrabold">Export
              Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={downloadJSON} className="hover:bg-blue-100 dark:hover:bg-slate-950">
              JSON Format (For Databases)
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => downloadCSV(false)} className="hover:bg-blue-100 dark:hover:bg-slate-950">
              Plain CSV (Without Headers)
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => downloadCSV(true)} className="hover:bg-blue-100 dark:hover:bg-slate-950">
              CSV for Spreadsheet Programs
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border text-xs text-slate-950 dark:text-white">
        <Table>
          <TableCaption>A list of your time sheets.</TableCaption>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead className="bg-primary-500 dark:bg-secondary-900" key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow className="text-xs max-w-2" key={`${row.original.id}_${rowIndex}`}>
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <TableCell key={`${row.original.id}_${cell.column.id}_${cellIndex}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-slate-600 dark:bg-slate-900">
            <TableRow>
              <TableCell colSpan={3}>Total Hours:
                <Tooltip title="Displays your total hours for the date range selected" placement="right">
                  <Info size={15} className="ml-1 text-slate-950 dark:text-primary-400 align-middle" />
                </Tooltip>
              </TableCell>
              <TableCell>{formatDuration(totalHoursSum)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex items-center justify-center space-x-4 p-2">
          <div className="flex items-center space-x-2">
            {/* First Page Button */}
            <button
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <Tooltip title="First Page" placement="top">
                <ChevronsLeft />
              </Tooltip>
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <Tooltip title="Previous Page" placement="top">
                <ChevronLeft />
              </Tooltip>
            </button>
          </div>
          <span>
          Page: {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <Tooltip title="Next Page" placement="top">
                <ChevronRight />
              </Tooltip>
            </button>
            <button
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              <Tooltip title="Last Page" placement="top">
                <ChevronsRight />
              </Tooltip>
            </button>
          </div>
          <span className="mr-2 ml-2">Display</span>
          <select className="bg-white dark:bg-secondary-800 text-black dark:text-white p-1 rounded"
                  value={table.getState().pagination.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value));
                  }}
          >
            {[7, 14, 21, 28, 35].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span className="ml-2">Rows</span>
        </div>
      </div>
    </div>
  );
};

export default TimesheetTable;
