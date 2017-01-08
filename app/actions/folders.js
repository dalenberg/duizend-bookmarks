// Constants
export const ADD_ACTIVE_FOLDER = 'ADD_ACTIVE_FOLDER';

export const addActiveFolder = (id) => ({
  type: ADD_ACTIVE_FOLDER,
  id,
});

//
// // Function
// export const fetchFolders = (parentId) => (dispatch) => {
//   // Request folders
//   dispatch(requestFolders(parentId));
//
//   // Gather all folders in this variable
//   const allFolders = [];
//
//   // Iterate over all folders
//   const filterAllFolders = (folders, depth) => {
//     folders
//       .filter(item => item.url === undefined)
//       .map(folder => {
//         // Push all folders to variable
//         allFolders.push({
//           id: folder.id,
//           title: folder.title,
//           depth,
//         });
//
//         // Do it again for all children folders
//         filterAllFolders(folder.children, depth + 1);
//
//         return true;
//       });
//   };
//
//   // Get folders and dispatch 'em
//   chrome.bookmarks.getSubTree(parentId, results => {
//     filterAllFolders(results, 0);
//     dispatch(receiveFolders(parentId, allFolders));
//   });
// };
