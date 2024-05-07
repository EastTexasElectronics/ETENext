
const data: Timesheets[] = [
    {
      id: "m5gr84i9",
      date: "12/31/2021",
      clockIn: "8:00:15 PM",
      clockOut: "1:01:01 PM",
      duration: "8 hours",
    },
  ]
  
  export type Timesheets = {
    id: string
    date: string
    clockIn: string
    clockOut: string
    duration: string
  }