import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appointmentsReducer from "./appointmentsReducer";
import ambulanceReducer from "./ambulanceReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    appointments: appointmentsReducer,
    ambulance: ambulanceReducer,
});

export default rootReducer;