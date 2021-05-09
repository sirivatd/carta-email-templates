import { combineReducers } from "redux";
import emailTemplatesReducer from "./email_templates";
import errorsReducer from "./errors";
import uiReducer from "./ui";

const rootReducer = combineReducers({emailTemplatesReducer, uiReducer, errorsReducer});

export default rootReducer;