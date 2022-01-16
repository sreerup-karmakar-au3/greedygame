import { combineReducers } from "redux";
import columnSelectReducer from "./columnSelectReducer";
import appNameReducer from "./appNameReducer";
import reportReducer from "./reportReducer";

const reducers = combineReducers({
    fields: columnSelectReducer,
    apps: appNameReducer,
    report: reportReducer,
});

export default reducers;
