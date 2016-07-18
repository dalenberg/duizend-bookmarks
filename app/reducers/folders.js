const initialState = {
  items: [],
  loading: false,
  current: '0',
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

    case 'SET_CURRENT_FOLDER':
      return Object.assign({}, state, {
        current: action.folderId,
      });

    default:
      return state;
  }
};

export default folders;
