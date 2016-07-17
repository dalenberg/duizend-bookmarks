const initialState = {
  items: [],
  loading: false,
};

const bookmarks = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_BOOKMARKS':
      return Object.assign({}, state, {
        items: [],
        loading: true,
      });

    case 'RECEIVE_BOOKMARKS':
      return Object.assign({}, state, {
        items: action.bookmarks,
        loading: false,
      });

    default:
      return state;
  }
};

export default bookmarks;
