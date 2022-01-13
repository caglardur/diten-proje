import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import SingleCell from "./singleCell"

const WeekFrame = ({ quarter, weekNumber, colourful }) => {
  let weekCells = []
  for (let i = 1; i <= 4; i++) {
    weekCells.push(
      <Draggable key={i} draggableId={quarter + i} index={i}>
        {provided => (
          <div className="col-3 px-1" style={{ paddingLeft: "1px", paddingRight: "1px", paddingBottom: "2px", paddingTop: "1px" }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <SingleCell quarter={quarter} cellNumber={(weekNumber - 1) * 4 + i} colourful={colourful} />
          </div>
        )}
      </Draggable>
    )
  }

  return (
    <DragDropContext>
      <Droppable droppableId="characters" direction="horizontal">
        {provided => (
          <div className="row characters" {...provided.droppableProps} ref={provided.innerRef}>
            {weekCells}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default WeekFrame
