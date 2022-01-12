import MonthFrame from "./calendar/monthFrame"

const CalendarMain = () => {
  const monthArray = [
    { name: "JAN", quarter: 1, colourful: true },
    { name: "FEB", quarter: 1, colourful: true },
    { name: "MAR", quarter: 1, colourful: false },
    { name: "APR", quarter: 2, colourful: false },
    { name: "MAY", quarter: 2, colourful: false },
    { name: "JUN", quarter: 2, colourful: false },
    { name: "JUL", quarter: 3, colourful: true },
    { name: "AUG", quarter: 3, colourful: true },
    { name: "SEP", quarter: 3, colourful: true },
    { name: "OCT", quarter: 4, colourful: true },
    { name: "NOV", quarter: 4, colourful: true },
    { name: "DEC", quarter: 4, colourful: false }
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
