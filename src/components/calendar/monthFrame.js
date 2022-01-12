import SingleCell from "./singleCell"

const MonthFrame = ({ month }) => {
  let complateCells = []

  for (let i = 0; i < 24; i++) {
    complateCells.push(
      <div className="col-3 px-0" key={i}>
        <SingleCell cellNumber={i + 1} colourful={month.colourful} />
      </div>
    )
  }

  return (
    <div className="col m-0">
      <div className="col border">
        <div className="row">
          <div className="col-auto ms-2 fw-bold">{"Q" + month.quarter}</div>
          <div className="col text-center fw-bold">{month.name}</div>
          <div className="col-auto ms-1 fw-bold"></div>
        </div>
      </div>
      <div className="col border">
        <div className="col">
          <div className="row m-2">{complateCells}</div>
        </div>
      </div>
    </div>
  )
}

export default MonthFrame
