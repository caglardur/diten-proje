import { useSelector } from "react-redux"

import SelectFilter from "./filter/selectFilter"

const FilterMenu = () => {
  const selectedFilter = useSelector(state => state.filter)

  const productItem = ["item 1", "item 2", "item 3", "item 4", "item 5"]
  const indicationItem = ["item 1", "item 2", "item 3", "item 4", "item 5"]
  const profileItem = ["item 1", "item 2", "item 3", "item 4", "item 5"]
  const promoSubjectItem = ["item 1", "item 2", "item 3", "item 4", "item 5"]
  const promoMaterialItem = ["item 1", "item 2", "item 3", "item 4", "item 5"]

  return (
    <div className="col border border-success mt-4 ">
      <div className="col p-3">
        <div className="row align-items-center">
          <SelectFilter title="product" type="checkbox" items={productItem} selected={selectedFilter.product} />
          <SelectFilter title="indication" type="checkbox" items={indicationItem} selected={selectedFilter.indication} />
          <SelectFilter title="profile" type="radio" items={profileItem} selected={selectedFilter.profile} />
          <SelectFilter title="promo_subject" type="radio" items={promoSubjectItem} selected={selectedFilter.promoSubject} />
          <SelectFilter title="promo_material" type="radio" items={promoMaterialItem} selected={selectedFilter.promoMaterial} />
        </div>
      </div>
      <div className="col bg-light p-3">
        <div className="row justify-content-end">
          <div className="col-auto pe-0">
            <button type="button" className="btn btn-outline-primary">
              apply
            </button>
          </div>
          <div className="col-auto pe-0">
            <button type="button" className="btn btn-outline-secondary">
              cancel
            </button>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-outline-danger">
              <i className="fas fa-rocket"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterMenu
