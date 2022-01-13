import WeekFrame from "./weekFrame"

const MonthFrame = ({ quarter, month }) => {
  let monthCells = []

  for (let i = 1; i <= 6; i++) {
    monthCells.push(
      <div className="col px-3 my-1" key={i}>
        <WeekFrame quarter={quarter} weekNumber={i} colourful={month.colourful} />
      </div>
    )
  }

  return (
    <div className="col">
      <div className="col border">
        <div className="row">
          <div className="col-auto ms-2 fw-bold">{"Q" + month.quarter}</div>
          <div className="col text-center fw-bold">{month.name}</div>
          <div className="col-auto ms-1 fw-bold"></div>
        </div>
      </div>
      <div className="col border overflow-hidden py-2">{monthCells}</div>
    </div>
  )
}

export default MonthFrame
