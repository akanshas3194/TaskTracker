import axios from "axios";

const authMiddleware = () => ({dispatch}) => next => async action => {
  if(action.type !== "apiCallForUserLogin")  return next(action)

  next(action);
  const { setData, url, data, method, headers, onSuccess } = action.payload

  try {

    let response = await axios.request({
      url,
      headers,
      method,
      data,
      setData
  });  

  {onSuccess && typeof onSuccess === "string" &&  dispatch({type:onSuccess , payload:response.data})}
  {onSuccess && typeof onSuccess === "function" &&  onSuccess(dispatch,response.data.token)}
  } catch (error) {

  }
}


export default authMiddleware