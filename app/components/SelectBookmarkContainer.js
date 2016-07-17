import { connect } from 'react-redux';
import FoldersFilter from './FoldersFilter';
import { fetchFolders, changeCurrentFolder } from '../actions/folders';

const mapStateToProps = (state) => ({
  folders: state.folders.items,
  loading: state.folders.loading,
  currentFolder: state.folders.current,
});

const mapDispatchToProps = (dispatch) => ({
  loadFolders: dispatch(fetchFolders('0')),
  onChange: (folder) => {
    dispatch(changeCurrentFolder(folder));
  },
});

const SelectBookmarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersFilter);

export default SelectBookmarkContainer;
