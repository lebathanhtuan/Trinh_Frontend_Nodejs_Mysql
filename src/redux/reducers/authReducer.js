import actionTypes from "../actions/actionTypes";

// Lấy dữ liệu từ localStorage (nếu có)
const storedUserData = localStorage.getItem('userData');
const initialUserData = storedUserData ? JSON.parse(storedUserData) : null;

const initialState = {
  isLoggedIn: initialUserData ? true : false,
  userInfo: initialUserData,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      // Lưu thông tin đăng nhập vào localStorage
      localStorage.setItem('userData', JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.payload,
      };
      case actionTypes.PROCESS_LOGOUT:
      // Xóa thông tin đăng nhập khỏi localStorage
      localStorage.removeItem('userData');
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default authReducer;
