import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { thunk } from "redux-thunk"
import { catsReducer } from "./cats-reducer"


export const store = createStore(catsReducer, applyMiddleware(thunk));