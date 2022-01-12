import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/@fortawesome/fontawesome-free/js/all"
import "./index.css"

import App from "./App"
import store from "./redux/rootReducer"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="container-fluid p-0 m-0 text-secondary">
        <App />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)
