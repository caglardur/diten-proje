const SingleCell = ({ cellNumber, colourful }) => {
  return <div className={"col opacity-50"} style={{ height: "20px", marginLeft: "3px", marginRight: "3px", marginTop: "1px", marginBottom: "1px", backgroundColor: colourful ? (cellNumber > 12 ? "#FEDDCB" : "#7FCFED") : "#EFF2F7" }}></div>
}

export default SingleCell
