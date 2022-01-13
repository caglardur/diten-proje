import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbtack } from "@fortawesome/free-solid-svg-icons"

import { setPinned } from "../../redux/pinReducer"

const PinButton = ({ line, quarter }) => {
  const selectedPin = useSelector(state => state.pinned[quarter])
  const dispatch = useDispatch()

  return (
    <div type="button" className={selectedPin === line ? "btn btn-outline-secondary p-0" : "btn btn-outline-secondary p-0 opacity-25"} style={{ height: "22px", width: "22px", marginBottom: "2px" }} onClick={() => dispatch(setPinned({ quarter, line }))}>
      <FontAwesomeIcon icon={faThumbtack} />
    </div>
  )
}

export default PinButton
