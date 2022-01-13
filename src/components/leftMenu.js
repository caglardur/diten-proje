import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAtom, faThLarge, faCalendarAlt, faEnvelope, faUsers, faCompress, faUnderline, faArchive, faTable, faClipboardCheck, faChartBar, faBarcode, faShareAlt, faAward } from "@fortawesome/free-solid-svg-icons"

const LeftMenu = () => {
  return (
    <div className="col text-center" style={{ width: "40px" }}>
      <div type="button" className="col fs-3 mt-3" style={{ width: "40px" }}>
        <FontAwesomeIcon icon={faAtom} />
      </div>
      <div className="col fs-6 align-items-center mt-4">
        <div type="button" className="col icon my-4">
          <FontAwesomeIcon icon={faThLarge} />
        </div>
        <div type="button" className="col my-4">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </div>
        <div type="button" className="col my-4">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div type="button" className="col my-4">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div type="button" className="col my-4">
          <FontAwesomeIcon icon={faCompress} />
        </div>
        <div type="button" className="col my-4">
          <FontAwesomeIcon icon={faUnderline} />
        </div>
        <div type="button" className="col my-4">
          <FontAwesomeIcon icon={faArchive} />
        </div>
        <div type="button" className="col my-4">
          <FontAwesomeIcon icon={faAward} />
        </div>
        <div type="button" className="col left-icon my-4">
          <FontAwesomeIcon icon={faTable} />
        </div>
        <div type="button" className="col left-icon my-4">
          <FontAwesomeIcon icon={faClipboardCheck} />
        </div>
        <div type="button" className="col left-icon my-4">
          <FontAwesomeIcon icon={faChartBar} />
        </div>
        <div type="button" className="col left-icon my-4">
          <FontAwesomeIcon icon={faBarcode} />
        </div>
        <div type="button" className="col left-icon my-4">
          <FontAwesomeIcon icon={faShareAlt} />
        </div>
      </div>
    </div>
  )
}

export default LeftMenu
