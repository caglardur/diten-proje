import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faOutdent, faIndent, faBug, faExpand, faBell, faInfo, faCaretDown } from "@fortawesome/free-solid-svg-icons"

const TopMenu = ({ showLeftMenu, setShowLeftMenu }) => {
  return (
    <div className="row text-secondary fs-6 align-items-center" style={{ height: "40px" }}>
      <div type="button" className="col-auto" onClick={() => setShowLeftMenu(!showLeftMenu)}>
        <FontAwesomeIcon icon={showLeftMenu ? faOutdent : faIndent} />
      </div>
      <div className="col">
        <div className="row float-end align-items-center">
          <div type="button" className="col-auto me-3">
            <img src={require("../img/usaflag.png")} alt="usaflag" style={{ width: "20px" }} />
          </div>
          <div type="button" className="col-auto me-3">
            <FontAwesomeIcon icon={faBug} />
          </div>
          <div type="button" className="col-auto me-3">
            <FontAwesomeIcon icon={faExpand} />
          </div>
          <div type="button" className="col-auto me-3 position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>
              3<span className="visually-hidden">unread messages</span>
            </span>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div type="button" className="col-auto me-3">
            <FontAwesomeIcon icon={faInfo} />
          </div>
          <div type="button" className="col-auto me-3">
            <div className="row float-end align-items-center">
              <div className="col-auto p-0">
                <img src={require("../img/ljajic.png")} alt="usaflag" className="rounded-pill me-1" style={{ width: "34px", height: "34px" }} />
              </div>
              <div className="d-none d-md-block col-auto p-0">Adem Ljajic</div>
              <div className="col-auto">
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
