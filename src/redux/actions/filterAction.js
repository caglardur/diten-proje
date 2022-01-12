import { setProduct, setIndication, setProfile, setPromoSubject, setPromoMaterial } from "../filterReducer"

export const setFilterAction = ({ title, checked, item, selected, type }) => {
  return async dispatch => {
    if (type === "checkbox") {
      if (checked) {
        if (title === "product") {
          dispatch(setProduct([...selected, item]))
        } else if (title === "indication") {
          dispatch(setIndication([...selected, item]))
        }
      } else {
        if (title === "product") {
          dispatch(setProduct([...selected.filter(select => select !== item)]))
        } else if (title === "indication") {
          dispatch(setIndication([...selected.filter(select => select !== item)]))
        }
      }
    } else {
      if (title === "profile") dispatch(setProfile(item))
      else if (title === "promo_subject") dispatch(setPromoSubject(item))
      else if (title === "promo_material") dispatch(setPromoMaterial(item))
    }
  }
}
