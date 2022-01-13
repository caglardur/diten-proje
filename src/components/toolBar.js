import FilterMenu from "./filterMenu"

const ToolBar = () => {
  return (
    <div className="col">
      <div className="col">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-4 mb-3">
            <div className="form-group position-relative">
              <input type="text" className="form-control" placeholder="search" />
              <div className="position-absolute top-50 translate-middle-y" style={{ right: "15px" }}>
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8 mb-3">
            <div className="row justify-content-end">
              <div className="col-auto ps-0">
                <button type="button" className="btn btn-outline-warning">
                  send to approval
                </button>
              </div>

              <div className="col-auto ps-0">
                <button type="button" className="btn btn-outline-secondary">
                  pre-plan
                </button>
              </div>
              <div className="col-auto ps-0">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                  <label className="btn btn-outline-primary" htmlFor="btnradio1">
                    <i className="fas fa-expand-arrows-alt"></i>
                  </label>
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                  <label className="btn btn-outline-primary" htmlFor="btnradio2">
                    <i className="fas fa-external-link-alt"></i>
                  </label>
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                  <label className="btn btn-outline-primary" htmlFor="btnradio3">
                    <i className="fas fa-gift"></i>
                  </label>
                </div>
              </div>
              <div className="col-auto ps-0">
                <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseFilter">
                  <div className="row">
                    <div className="col-auto">filter</div>
                    <div className="col-auto">
                      <i className="fas fa-sort"></i>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col collapse" id="collapseFilter">
        <FilterMenu />
      </div>
    </div>
  )
}

export default ToolBar
