const initialState = {
  loggedIn: !!localStorage.getItem('token'),
  user: {
    data: {
      name: localStorage.getItem('userName') || '',
      role: localStorage.getItem('role') || 'GUEST',
    },
    isLoading: false,
    error: {},
  },
};

const reducer = (state = initialState, action) => {
  const MasterMap = {
    'AUTH/LOGIN_REQUEST': () => ({
      ...state,
      user: {
        ...state.user,
        isLoading: true,
      },
    }),
    'AUTH/LOGIN_SUCCESS': () => ({
      ...state,
      loggedIn: true,
      user: {
        ...state.user,
        data: action?.payload,
        isLoading: false,
      },
    }),
    'AUTH/LOGIN_FAILURE': () => ({
      ...state,
      user: {
        ...state.user,
        error: action?.payload,
        isLoading: false,
      },
    }),
    'AUTH/LOGOUT': () => ({
      ...initialState,
    }),
  };

  try {
    return MasterMap[action?.type]();
  } catch {
    return state;
  }
};

export default reducer;
