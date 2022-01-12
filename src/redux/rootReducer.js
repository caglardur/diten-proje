import { configureStore } from "@reduxjs/toolkit"

import FilterReducer from "./filterReducer"

export default configureStore({
  reducer: {
    filter: FilterReducer
  }
})
