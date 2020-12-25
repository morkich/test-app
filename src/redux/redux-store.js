import thunkMiddleware from "redux-thunk";
import productFilterReducer from "./productFilter-reducer";
import productItemReducer from "./productItem-reducer";
import productLoopReducer from "./productLoop-reducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    productLoop: productLoopReducer,
    productItem: productItemReducer,
    productFilter: productFilterReducer
});
 
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;