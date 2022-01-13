import { useDispatch, useSelector } from "react-redux"

import { setPinned } from "../../redux/pinReducer"

const PinButton = ({ line, quarter }) => {
  const selectedPin = useSelector(state => state.pinned[quarter])
  const dispatch = useDispatch()

  return (
    <div type="button" className={selectedPin === line ? "btn btn-outline-secondary p-0" : "btn btn-outline-secondary p-0 opacity-25"} style={{ height: "22px", width: "22px", marginBottom: "1px" }} onClick={() => dispatch(setPinned({ quarter, line }))}>
      <i className="fas fa-thumbtack"></i>
    </div>
  )
}

export default PinButton
