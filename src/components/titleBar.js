import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUndoAlt, faBullhorn } from "@fortawesome/free-solid-svg-icons"

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
                <div className="col-auto">
                  <FontAwesomeIcon icon={faUndoAlt} />
                </div>
                <div className="col-auto d-none d-md-block ps-0">back to page</div>
              </div>
            </button>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faBullhorn} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleBar
