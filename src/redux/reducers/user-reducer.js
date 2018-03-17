/**
 * User Reducer
 */

// Set initial state
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN': {
      console.log('userReducer : USER_LOGGED_IN');
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case 'USER_DETAILS_UPDATE': {
      console.log('userReducer : USER_DETAILS_UPDATE');
      if (action.data) {
        const input = {
          ...action.data,
        };

        return {
          ...state,
          ...input,
        };
      }
      return {};
    }
    case 'USER_LOGGED_OUT': {
      console.log('userReducer : USER_LOGGED_OUT');
      return {
        isAuthenticated: false,
      };
    }
    case 'USER_FIREBASE_MESSAGE': {
      return {
        ...state,
        firebaseMessage: action.data.message,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
