import { useSelector } from "react-redux"

const SingleCell = ({ quarter, cellNumber, colourful }) => {
  const selectedPin = useSelector(state => state.pinned[quarter])

  if (selectedPin) {
    if (Math.ceil(cellNumber / 4) === selectedPin) {
      colourful = false
    }
  }

  return <div className="opacity-50" style={{ height: "20px", backgroundColor: colourful ? (cellNumber > 12 ? "#FEDDCB" : "#7FCFED") : "#EFF2F7" }}></div>
}

export default SingleCell
