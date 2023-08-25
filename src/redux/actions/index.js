import actionTypes from "./actionTypes";

export const loginSuccess = (info) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload : info
  };
};

export const logout = () => {
  return {
    type: actionTypes.PROCESS_LOGOUT,
  };
};

export const loginFail = () => {
  return {
    type: actionTypes.USER_LOGIN_FAIL,
  };
};

