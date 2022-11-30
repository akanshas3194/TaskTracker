import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from "./Slices/authSlice";
import authMiddleware from './Middleware/auth';
import EmployeeTaskReducer from "./Slices/taskSlice"
import taskMiddleware from './Middleware/taskMiddleware';

// For combineLocalReducer 
const rootReducer = combineReducers({
    auth: AuthReducer,
    employeeData: EmployeeTaskReducer
})



// For configureStore And Apply middleware 
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({immutableCheck: false, serializableCheck:false}).concat(authMiddleware(),taskMiddleware()),
})

export default store