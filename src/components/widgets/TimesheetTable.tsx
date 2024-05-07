"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

const data: Timesheet[] = [
  {
    id: "m5gr84i9",
    date: "12/31/2021",
    clockIn: "8:00:15 PM",
    clockOut: "1:01:01 PM",
    duration: "8 hours",
  },
]

export type Timesheet = {
  id: string
  date: string
  clockIn: string
  clockOut: string
  duration: string
}

export const columns: ColumnDef<Timesheet>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => row.getValue("date"),
  },
  {
    accessorKey: "clockIn",
    header: "Clock In",
    cell: ({ row }) => row.getValue("clockIn"),
  },
  {
    accessorKey: "clockOut",
    header: "Clock Out",
    cell: ({ row }) => row.getValue("clockOut"),
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => row.getValue("duration"),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const timesheet = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(timesheet.duration)}>
              Copy Duration
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(timesheet.clockIn)}>
              Copy Clock In
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(timesheet.clockOut)}>
              Copy Clock Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function TimesheetTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className="w-full rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
