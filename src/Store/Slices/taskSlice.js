import { createSlice, createAction } from "@reduxjs/toolkit";
import { TaskSlice } from "../../Constants/sliceName";
import { dateFormatter } from "../../Common/utils";

const initialState = {
    workingDate: dateFormatter('YYYY-MM-DD'),
    userTask:[],
    isAddCardLoading:false,
}

export const apiCallForTask = createAction('apiCallForTask')

const employeeTaskSlice = createSlice({
    name: TaskSlice,
    initialState: initialState,
    reducers: {
        updateWorkingDate: (day, action) => {
            day.workingDate = action.payload
        },

        getUserTasks: (state, action) => {
            state.userTask = action.payload
            state.isAddCardLoading=false
          },
        getTaskByID:(state, action) =>{
            state.id=action.payload
            console.log(state.id)
          },
          addCardLoaderStart:(load, action)=>{
            load.isAddCardLoading=true
          }
    },
})

export const { updateWorkingDate,getUserTasks,getTaskByID,addCardLoaderStart } = employeeTaskSlice.actions;
export default employeeTaskSlice.reducer;


export const requestForUserTask = () => apiCallForTask({
    url:"https://62e8c790249bb1284eb3a622.mockapi.io/foods",
    onSuccess: getUserTasks.type,
    onRequestStart:addCardLoaderStart.type
  })

