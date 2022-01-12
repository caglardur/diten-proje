import MonthFrame from "./calendar/monthFrame"

const CalendarMain = () => {
  const monthArray = [
    { name: "JAN", quarter: 1 },
    { name: "FEB", quarter: 1 },
    { name: "MAR", quarter: 1 },
    { name: "APR", quarter: 2 },
    { name: "MAY", quarter: 2 },
    { name: "JUN", quarter: 2 },
    { name: "JUL", quarter: 3 },
    { name: "AUG", quarter: 3 },
    { name: "SEP", quarter: 3 },
    { name: "OCT", quarter: 4 },
    { name: "NOV", quarter: 4 },
    { name: "DEC", quarter: 4 }
  ]

  return (
    <div className="col" style={{ fontSize: "12px" }}>
      <div className="col">
        <div className="row mx-1">
          {monthArray.map((month, i) => (
            <div className="col-4 px-0" key={i}>
              <MonthFrame month={month} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalendarMain
