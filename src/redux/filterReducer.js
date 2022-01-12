import { createSlice } from "@reduxjs/toolkit"

export const FilterReduce = createSlice({
  name: "filter",
  initialState: {
    product: [],
    indication: [],
    profile: null,
    promoSubject: null,
    promoMaterial: null
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
    setIndication: (state, action) => {
      state.indication = action.payload
    },
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    setPromoSubject: (state, action) => {
      state.promoSubject = action.payload
    },
    setPromoMaterial: (state, action) => {
      state.promoMaterial = action.payload
    }
  }
})

export const { setProduct, setIndication, setProfile, setPromoSubject, setPromoMaterial } = FilterReduce.actions

export default FilterReduce.reducer
