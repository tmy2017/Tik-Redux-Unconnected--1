import { createStore } from "redux";
import rootReducer from "./reducers";
//zzCmt: so reducer already written la!
// export default createStore(rootReducer);
// zzCmt: add redux dev tool
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
