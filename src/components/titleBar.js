const TitleBar = () => {
  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-auto">
        <div className="col fs-5 fw-bolder">Cardilogy, A, Hospital-Policlinc</div>
        <div className="col fs-6">Marketing / Visit Mix / Cardiology, A, Hospital-Policlinc</div>
      </div>
      <div className="col-auto">
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-outline-secondary">
              <div className="row">
                <div className="col-auto me-0 pe-0">
                  <i className="fas fa-undo-alt"></i>
                </div>
                <div className="col-auto">back to page</div>
              </div>
            </button>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-outline-secondary">
              <i className="fas fa-bullhorn"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleBar
