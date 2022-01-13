const TopMenu = ({ showLeftMenu, setShowLeftMenu }) => {
  return (
    <div className="row text-secondary fs-6 align-items-center" style={{ height: "40px" }}>
      <div type="button" className="col-auto" onClick={() => setShowLeftMenu(!showLeftMenu)}>
        <i className={showLeftMenu ? "fas fa-outdent" : "fas fa-indent"}></i>
      </div>
      <div className="col">
        <div className="row float-end align-items-center">
          <div type="button" className="col-auto me-3">
            <img src={require("../img/usaflag.png")} alt="usaflag" style={{ width: "20px" }} />
          </div>
          <div type="button" className="col-auto me-3">
            <i className="fas fa-bug"></i>
          </div>
          <div type="button" className="col-auto me-3">
            <i className="fas fa-expand"></i>
          </div>
          <div type="button" className="col-auto me-3 position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>
              3<span className="visually-hidden">unread messages</span>
            </span>
            <i className="far fa-bell"></i>
          </div>
          <div type="button" className="col-auto me-3">
            <i className="fas fa-info"></i>
          </div>
          <div type="button" className="col-auto me-3">
            <img src={require("../img/ljajic.png")} alt="usaflag" className="rounded-pill me-1" style={{ width: "34px", height: "34px" }} />
            Adem Ljajic <i className="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
