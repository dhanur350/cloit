import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cloitReducer from "./slice";
import rootSaga from "./saga";

const sagamiddleware = createSagaMiddleware();
const middleware = [sagamiddleware];

export default configureStore({
  reducer: {
    cloit: cloitReducer
  },
  middleware: (getdefaultMiddleware) => {
    return getdefaultMiddleware().concat(middleware);
  }
});

sagamiddleware.run(rootSaga);