import { configureStore } from "@reduxjs/toolkit"

import FilterReducer from "./filterReducer"
import PinReducer from "./pinReducer"

export default configureStore({
  reducer: {
    filter: FilterReducer,
    pinned: PinReducer
  }
})
