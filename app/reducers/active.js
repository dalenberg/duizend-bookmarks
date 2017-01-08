const active = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_FOLDER':
      return [
          ...state,
          action.folderId,
      ];

    default:
      return state;
  }
};

export default active;
