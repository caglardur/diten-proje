import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faExpandArrowsAlt, faExternalLinkAlt, faGift, faSort } from "@fortawesome/free-solid-svg-icons"

import FilterMenu from "./filterMenu"

const ToolBar = () => {
  return (
    <div className="col">
      <div className="col">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-12 col-lg-auto mb-3">
            <div className="form-group position-relative">
              <input type="text" className="form-control" placeholder="search" />
              <div className="position-absolute top-50 translate-middle-y" style={{ right: "15px" }}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-auto mb-3">
            <div className="row justify-content-between">
              <div className="col-auto">
                <div className="row">
                  <div className="col-xs-12 col-sm-auto">
                    <button type="button" className="btn btn-outline-warning">
                      send to approval
                    </button>
                  </div>

                  <div className="col-xs-12 col-sm-auto">
                    <button type="button" className="btn btn-outline-secondary">
                      pre-plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="row">
                  <div className="col-xs-12 col-sm-auto">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                      <label className="btn btn-outline-primary" htmlFor="btnradio1">
                        <FontAwesomeIcon icon={faExpandArrowsAlt} />
                      </label>
                      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                      <label className="btn btn-outline-primary" htmlFor="btnradio2">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </label>
                      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                      <label className="btn btn-outline-primary" htmlFor="btnradio3">
                        <FontAwesomeIcon icon={faGift} />
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-auto">
                    <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" href="#collapseFilter">
                      <div className="row">
                        <div className="col-auto">filter</div>
                        <div className="col-auto">
                          <FontAwesomeIcon icon={faSort} />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
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
