import FilterMenu from "./filterMenu"

const ToolBar = () => {
  return (
    <div className="col">
      <div className="col">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <div className="input-group">
              <input className="form-control border-end-0 border" type="text" defaultValue="search" id="example-search-input" />
              <span className="input-group-append">
                <button className="btn btn-outline-secondary bg-white border-start-0 border ms-n3" type="button">
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </div>
          <div className="col-auto">
            <div className="row">
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