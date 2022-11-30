import { createSlice, createAction } from "@reduxjs/toolkit";
import { AuthSlice } from "../../Constants/sliceName";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL } from "../../Constants/apiURL";

const initialState = {
  userDetails: [],
  userAuth: 0
}

export const userLoging = createAction('apiCallForUserLogin')

const authenticationSlice = createSlice({
  name: AuthSlice,
  initialState: initialState,
  reducers: {
    getUserDetails: (state, action) => {
     
    },

    checkUserAuth: (state, action) => {
      state.userAuth = action.payload
    },

    getUserLogout: (state, action) => {
      AsyncStorage.removeItem('Token_Key')
      state.userAuth = 1
    }

  },
})

export const { getUserDetails, checkUserAuth, getUserLogout } = authenticationSlice.actions;
export default authenticationSlice.reducer

export const requestForLoginUser = (data) => userLoging({
  url: baseURL,
  method: "POST",
  setData: getUserDetails.type,
  data: { userEmail: data.email, password: data.password },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  onSuccess: async (dispatch, res) => {
    await AsyncStorage.setItem('Token_Key', res)
    dispatch(checkUserAuth(2))
  }
})

export const requestForLogoutUser = () => userLoging({
  url: baseURL,
  onSuccess: getUserLogout.type,
})
