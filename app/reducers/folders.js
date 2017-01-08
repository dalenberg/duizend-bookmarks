const initialState = {
  items: [],
  loading: false,
  current: [],
};

const folders = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_FOLDERS':
      return Object.assign({}, state, {
        items: [],
        loading: true,
      });

    case 'RECEIVE_FOLDERS':
      return Object.assign({}, state, {
        items: action.folders,
        loading: false,
      });

    default:
      return state;
  }
};

export default folders;
