import axiosConfig from "../../../services/axiosConfig"
export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const res = await axiosConfig.post("/users/login",credentials);
    const data = res?.data
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response });
  }
};
