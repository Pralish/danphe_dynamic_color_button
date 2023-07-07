export const colorHistoryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLOR':
      return [action.color, ...state];
    default:
      return state;
  }
};