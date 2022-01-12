import CalendarMain from "./components/calendarMain"
import LeftMenu from "./components/leftMenu"
import TitleBar from "./components/titleBar"
import ToolBar from "./components/toolBar"
import TopMenu from "./components/topMenu"

function App() {
  return (
    <div className="row m-0 m-0">
      <div className="col-auto" style={{ backgroundColor: "#2B333A" }}>
        <LeftMenu />
      </div>
      <div className="col m-0 p-0">
        <div className="col bg-white p-3 shadow-sm">
          <TopMenu />
        </div>
        <div className="col p-3">
          <TitleBar />
        </div>
        <div className="col bg-white m-3 p-3">
          <div className="col">
            <ToolBar />
          </div>
          <div className="col mt-3">
            <CalendarMain />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
