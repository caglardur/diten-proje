import { useDispatch } from "react-redux"

import { setFilterAction } from "../../redux/actions/filterAction"

const SelectFilter = ({ title, type, items, selected }) => {
  const dispatch = useDispatch()
  let selectedWithSpace = selected
  if (type === "checkbox") {
    selectedWithSpace = selected.join(", ")
  }

  return (
    <div className="col">
      <div className="col">
        <label htmlFor="inputProduct" className="form-label">
          {title}
        </label>
      </div>
      <div className="col d-grid">
        <button className="btn btn-outline-secondary text-start" type="button" id="dropdownMenuProduct" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          {selected && selected.length > 0 ? selectedWithSpace : "select"}
        </button>
        <ul className="dropdown-menu px-2" aria-labelledby="dropdownMenuProduct">
          {items &&
            items.map((item, index) => (
              <li className="form-check" key={index}>
                <input className="form-check-input" type={type} id={title + item} name={title} onChange={e => dispatch(setFilterAction({ title, checked: e.target.checked, item, selected, type }))} />
                <label className="form-check-label" htmlFor={title + item}>
                  {item}
                </label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default SelectFilter
