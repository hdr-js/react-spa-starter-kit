const initialState = {
  data: {},
};

const reducer = (state = initialState, action) => {
  const MasterMap = {
    'CONFIRMATION/ASK': () => ({
      ...state,
      data: { open: true, ...action.payload },
    }),
    'CONFIRMATION/REMOVE': () => ({
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
