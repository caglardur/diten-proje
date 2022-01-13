import PinButton from "./pinButton"

const PinFilter = ({ quarter }) => {
  let pinCells = []
  for (let i = 0; i < 6; i++) {
    pinCells.push(
      <div className="col" key={i}>
        <PinButton line={i + 1} quarter={quarter} />
      </div>
    )
  }
  return (
    <div className="col p-0 m-0">
      <div className="col" style={{ height: "22px", marginBottom: "10px" }}></div>
      {pinCells}
    </div>
  )
}

export default PinFilter
