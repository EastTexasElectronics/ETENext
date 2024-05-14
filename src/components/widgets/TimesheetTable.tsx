'use client';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
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
import { cn } from '~/utils/utils';
import Datepicker from 'react-tailwindcss-datepicker';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption, TableFooter } from '../ui/table';
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
  Info,
  ChevronUp,
  ChevronDown,
  ArrowDownAZ,
  ArrowUpZA,
  ArrowDown01,
  ArrowUp10,
  RefreshCcw,
  Copy,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';
import { formatTime, formatDate, formatDuration, downloadFile } from '~/utils/TimesheetUtils';
import { Timesheet } from '~/shared/types';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import { useUser } from '@clerk/nextjs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"




const TimesheetTable: React.FC = () => {
  const [filteredTimesheets, setFilteredTimesheets] = useState<Timesheet[]>([]);
  const [sorting, setSorting] = useState<SortingState>([{ id: 'date', desc: false }]);
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [firstNameFilter, setFirstNameFilter] = useState('');
  const [lastNameFilter, setLastNameFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Timesheet[]>('/api/timesheets');
      filterTimesheets(response.data, dateRange.startDate, dateRange.endDate);
    };
    fetchData();
  }, [dateRange.startDate, dateRange.endDate, firstNameFilter, lastNameFilter]);

  const handleValueChange = (newValue: any) => {
    setDateRange(newValue);
  };

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
    const filteredData = timesheets.filter(timesheet => {
      const startMatch = !startDate || new Date(timesheet.clockIn) >= startDate;
      const endMatch = !endDate || new Date(timesheet.clockIn) <= endDate;
      const firstNameMatch = timesheet.firstName ? timesheet.firstName.toLowerCase().includes(firstNameFilter.toLowerCase()) : false;
      const lastNameMatch = timesheet.lastName ? timesheet.lastName.toLowerCase().includes(lastNameFilter.toLowerCase()) : false;
      return startMatch && endMatch && (firstNameFilter ? firstNameMatch : true) && (lastNameFilter ? lastNameMatch : true);
    });
    setFilteredTimesheets(filteredData);
  };


  const totalHoursSum = useMemo(() => {
    return filteredTimesheets.reduce((total, current) => total + (current.duration || 0), 0);
  }, [filteredTimesheets]);

  const toggleSorting = useCallback((columnId: string) => {
    const existingSort = sorting.find(s => s.id === columnId);
    const isDesc = existingSort ? existingSort.desc : false;
    setSorting([{ id: columnId, desc: !isDesc }]);
  }, [sorting, setSorting]);

  const handleSortSelection = (sortOption: string) => {
    switch (sortOption) {
      case 'dateDesc':
        setSorting([{ id: 'date', desc: true }]);
        break;
      case 'dateAsc':
        setSorting([{ id: 'date', desc: false }]);
        break;
      case 'hoursDesc':
        setSorting([{ id: 'total_hours', desc: true }]);
        break;
      case 'hoursAsc':
        setSorting([{ id: 'total_hours', desc: false }]);
        break;
      case 'firstNameAsc':
        setSorting([{ id: 'firstName', desc: false }]);
        break;
      case 'firstNameDesc':
        setSorting([{ id: 'firstName', desc: true }]);
        break;
      case 'lastNameAsc':
        setSorting([{ id: 'lastName', desc: false }]);
        break;
      case 'lastNameDesc':
        setSorting([{ id: 'lastName', desc: true }]);
        break;
      default:
        setSorting([]);
    }
  };

  const columns: ColumnDef<Timesheet>[] = useMemo(() => [
    {
      accessorKey: 'clockIn',
      header: () => {
        const sortStatus = sorting.find(s => s.id === 'date');
        const direction = sortStatus?.desc ?
          <Tooltip title="Newest to Oldest" placement="bottom"><ChevronDown /></Tooltip> :
          <Tooltip title="Oldest to Newest" placement="bottom"><ChevronUp /></Tooltip>;
        return (
          <div onClick={() => setSorting([{ id: 'date', desc: !sortStatus?.desc }])}
               className="flex items-center cursor-pointer select-none">
            Date {sortStatus && direction}
          </div>
        );
      },
      cell: (info) => formatDate(info.getValue() as string),
      id: 'date',
      enableSorting: true,
    },
    {
      accessorKey: 'firstName',
      header: () => {
        const sortStatus = sorting.find(s => s.id === 'first_name');
        const direction = sortStatus?.desc ?
          <Tooltip title="Descending" placement="bottom"><ChevronDown /></Tooltip> :
          <Tooltip title="Ascending" placement="bottom"><ChevronUp /></Tooltip>;
        return (
          <div onClick={() => toggleSorting('first_name')}
               className="flex items-center cursor-pointer select-none">
            First Name {sortStatus && direction}
          </div>
        );
      },
      cell: (info) => info.getValue() || 'N/A',
      id: 'first_name',
      enableSorting: true,
    },
    {
      accessorKey: 'lastName',
      header: () => {
        const sortStatus = sorting.find(s => s.id === 'last_name');
        const direction = sortStatus?.desc ?
          <Tooltip title="Descending" placement="bottom"><ChevronDown /></Tooltip> :
          <Tooltip title="Ascending" placement="bottom"><ChevronUp /></Tooltip>;
        return (
          <div onClick={() => toggleSorting('last_name')}
               className="flex items-center cursor-pointer select-none">
            Last Name {sortStatus && direction}
          </div>
        );
      },
      cell: (info) => info.getValue() || 'N/A',
      id: 'last_name',
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
        const direction = sortStatus?.desc ?
          <Tooltip title="Most to Least" placement="bottom"><ChevronDown /></Tooltip> :
          <Tooltip title="Least to Most" placement="bottom"><ChevronUp /></Tooltip>;
        console.log('Rendering Total Hours Sort Icon: ', sortStatus?.desc ? 'Descending' : 'Ascending');
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
  ], [sorting, toggleSorting]);

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

  const { isLoaded, isSignedIn, user } = useUser(); // Accessing the user object
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  function refreshPage() {
    window.location.reload();
  }

  const ariaLabel = { 'aria-label': 'description' };

  return (
    <div>
      <div className="p-2 flex justify-center items-center w-full">

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>New Team</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Cloud className="mr-2 h-4 w-4" />
              <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>














        <NavigationMenu className="max-w-screen-xl w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="text-black dark:text-white"
                aria-label="Toggle navigation menu"
                onPointerMove={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
              >
                Export
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className="bg-white dark:bg-slate-800 text-black dark:text-white"
                disableOutsidePointerEvents
                onPointerEnter={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
              >
                <ul className="grid gap-3 p-6 w-full max-w-md md:max-w-lg lg:max-w-xl lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/sales"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Export your timesheets
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Don't see the format you need? Want to integrate with your accounting software? With our
                          premium dashboard more integrations are available <a href="/sales">Contact Sales</a>
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    onClick={downloadJSON}
                    title="Plain CSV"
                    className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                  >
                    For text editors does not include headers.
                  </ListItem>
                  <ListItem
                    onClick={() => downloadCSV(true)}
                    title="CSV with Headers"
                    className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                  >
                    CSV with headers are meant to work with spread sheet programs such as Excel.
                  </ListItem>
                  <ListItem
                    onClick={() => downloadCSV(false)}
                    title="JSON"
                    className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                  >
                    Great for databases
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="text-black dark:text-white"
                aria-label="Toggle navigation menu"
                onPointerMove={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
              >
                Sort By:
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className="bg-white dark:bg-slate-800 dark:text-white"
                disableOutsidePointerEvents
                onPointerEnter={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
              >
                <ul className="w-64">
                  <li className="flex flex-col space-y-2">
                    {/* Each sort option is rendered with an icon and title */}
                    <span className="flex items-center">
                <ArrowUp10 size={20} className="text-black dark:text-white" />
                <ListItem
                  onClick={() => handleSortSelection('dateDesc')}
                  title="Date: Newest to Oldest"
                  className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                />
              </span>
                    <span className="flex items-center">
                <ArrowDown01 size={20} className="text-black dark:text-white" />
                <ListItem
                  onClick={() => handleSortSelection('dateAsc')}
                  title="Date: Oldest to Newest"
                  className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                />
              </span>
                    <span className="flex items-center">
                <ArrowUp10 size={20} className="text-black dark:text-white" />
                <ListItem
                  onClick={() => handleSortSelection('hoursDesc')}
                  title="Total Hours: Most to Least"
                  className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                />
              </span>
                    <span className="flex items-center">
                <ArrowDown01 size={20} className="text-black dark:text-white" />
                <ListItem
                  onClick={() => handleSortSelection('hoursAsc')}
                  title="Total Hours: Least to Most"
                  className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                />
              </span>
                    <span className="flex items-center">
                <ArrowDownAZ size={20} className="text-black dark:text-white" />
                <ListItem
                  onClick={() => handleSortSelection('firstNameAsc')}
                  title="First Name: A to Z"
                  className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                />
              </span>
                    <span className="flex items-center">
                <ArrowUpZA size={20} className="text-black dark:text-white" />
                <ListItem
                  onClick={() => handleSortSelection('firstNameDesc')}
                  title="First Name: Z to A"
                  className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                />
              </span>
                    <span className="flex items-center">
                <ArrowDownAZ size={20} className="text-black dark:text-white" />
                <ListItem
                  onClick={() => handleSortSelection('lastNameAsc')}
                  title="Last Name: A to Z"
                  className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                />
              </span>
                    <span className="flex items-center">
                <ArrowUpZA size={20} className="text-black dark:text-white" />
                <ListItem
                  onClick={() => handleSortSelection('lastNameDesc')}
                  title="Last Name: Z to A"
                  className="text-lg font-medium cursor-pointer hover:bg-gray-400 dark:hover:bg-primary-500"
                />
              </span>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <div className="w-64 p-4">
              <Tooltip title="Select the dates you wish to be shown on the table. By default all results are shown."
                       placement="bottom">
                <Datepicker
                  showShortcuts={true}
                  inputClassName="w-full rounded-md focus:ring-0 font-normal bg-gray-100 dark:bg-slate-800 dark:placeholder:text-white-100"
                  separator="-"
                  primaryColor="indigo"
                  popoverDirection="down"
                  showFooter={true}
                  value={dateRange}
                  useRange={false}
                  startWeekOn="sun"
                  onChange={handleValueChange}
                  placeholder="Select Date Range"
                  displayFormat="MM/DD/YY"
                />
              </Tooltip>
            </div>
            <div className="flex items-center my-4">
              <Label htmlFor="firstName" className="mr-2">Filter By Name:</Label>
              <Input
                type="text"
                className="bg-gray-300 text-black dark:bg-secondary-700 dark:text-white"
                id="firstName"
                placeholder="First Name"
                value={firstNameFilter}
                onChange={e => setFirstNameFilter(e.target.value)}
              />
              <Label htmlFor="lastName" className="mr-2 ml-2">Or</Label>
              <Input
                type="text"
                id="lastName"
                className="bg-gray-300 text-black dark:bg-secondary-700 dark:text-white"
                placeholder="Last Name"
                value={lastNameFilter}
                onChange={e => setLastNameFilter(e.target.value)}
              />
              <Tooltip title="Refresh Table" placement="left">
                <RefreshCcw
                  onClick={refreshPage}
                  className="ml-2"
                  size={24}
                />
              </Tooltip>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
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
          {/*TODO Move the Info Icon to the right side of the Total Hours: Current it is below it.*/}
          <TableFooter className="w-full bg-slate-600 dark:bg-slate-900 ">
            <TableRow>
              <TableCell colSpan={5}>Total Hours:</TableCell>
              <TableCell>{formatDuration(totalHoursSum)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex items-center justify-center space-x-4 p-2">
          <div className="flex items-center space-x-2">
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
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span className="ml-2">Rows</span>
        </div>
      </div>
      {/*TODO Update Accordion content*/}
      <Accordion
        defaultExpanded
        className="bg-white border-black text-black dark:bg-slate-800 dark:border-white dark:text-white rounded-2xl">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-black dark:text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            {user && (
              <h1 className="text-sm font-bold ml-4 hidden sm:block">👋 Hi, {user.firstName} Upgrade to unlock more
                features! </h1>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            With an organization membership you unlock this following for your timesheets
            <ul>
              <li>Manage all of your employees times sheets in one place.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TimesheetTable;

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
