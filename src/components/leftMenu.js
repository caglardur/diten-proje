const LeftMenu = () => {
  return (
    <div className="col text-center" style={{ width: "40px" }}>
      <div type="button" className="col fs-3 mt-3" style={{ width: "40px" }}>
        <i className="fab fa-react"></i>
      </div>
      <div className="col fs-6 align-items-center mt-4">
        <div type="button" className="col icon my-4">
          <i className="fas fa-th-large"></i>
        </div>
        <div type="button" className="col my-4">
          <i className="far fa-calendar-alt"></i>
        </div>
        <div type="button" className="col my-4">
          <i className="fas fa-envelope"></i>
        </div>
        <div type="button" className="col my-4">
          <i className="fas fa-users"></i>
        </div>
        <div type="button" className="col my-4">
          <i className="fas fa-compress"></i>
        </div>
        <div type="button" className="col my-4">
          <i className="fas fa-underline"></i>
        </div>
        <div type="button" className="col my-4">
          <i className="fas fa-archive"></i>
        </div>
        <div type="button" className="col my-4">
          <i className="fab fa-yarn"></i>
        </div>
        <div type="button" className="col left-icon my-4">
          <i className="fas fa-table"></i>
        </div>
        <div type="button" className="col left-icon my-4">
          <i className="fas fa-clipboard-check"></i>
        </div>
        <div type="button" className="col left-icon my-4">
          <i className="fas fa-chart-bar"></i>
        </div>
        <div type="button" className="col left-icon my-4">
          <i className="fas fa-barcode"></i>
        </div>
        <div type="button" className="col left-icon my-4">
          <i className="fas fa-share-alt"></i>
        </div>
      </div>
    </div>
  )
}

export default LeftMenu
