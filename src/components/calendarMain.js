import MonthFrame from "./calendar/monthFrame"
import PinFilter from "./calendar/pinFilter"

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
        <div className="row">
          <div className="col">
            <div className="row mx-1">
              {monthArray.map(
                (month, i) =>
                  month.quarter === 1 && (
                    <div className="col-4 px-0" key={i}>
                      <MonthFrame quarter="q1" month={month} />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="col-auto ps-0">
            <PinFilter quarter="q1" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="row mx-1">
              {monthArray.map(
                (month, i) =>
                  month.quarter === 2 && (
                    <div className="col-4 px-0" key={i}>
                      <MonthFrame quarter="q2" month={month} />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="col-auto ps-0">
            <PinFilter quarter="q2" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="row mx-1">
              {monthArray.map(
                (month, i) =>
                  month.quarter === 3 && (
                    <div className="col-4 px-0" key={i}>
                      <MonthFrame quarter="q3" month={month} />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="col-auto ps-0">
            <PinFilter quarter="q3" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="row mx-1">
              {monthArray.map(
                (month, i) =>
                  month.quarter === 4 && (
                    <div className="col-4 px-0" key={i}>
                      <MonthFrame quarter="q4" month={month} />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="col-auto ps-0">
            <PinFilter quarter="q4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarMain
