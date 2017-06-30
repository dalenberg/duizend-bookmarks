import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BookmarkList from '../components/BookmarkList';

import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

import { getBookmarksByFolder } from '../selectors';
import { deleteActiveBookmark, fetchBookmarks } from '../actions';

const propTypes = {
  folder: PropTypes.object,
  bookmarks: PropTypes.array,
};

const connectTarget = (connect) => ({
  connectDropTarget: connect.dropTarget(),
});

const connectAndMonitor = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const folderSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const folderTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveFolder(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
};

class Folder extends Component {
  componentDidMount() {
    this.props.getBookmarks(this.props.folder.id);
  }

  render() {
    return this.props.connectDragSource(this.props.connectDropTarget(
      <div style={{ cursor: 'drag' }}>
        <BookmarkList
          folder={this.props.folder}
          bookmarks={this.props.bookmarks}
          deleteBookmark={this.props.onDeleteBookmark}
        />
      </div>
    ));
  }
}

Folder.propTypes = propTypes;

const DraggableFolder = DropTarget('FOLDER', folderTarget, connectTarget)(DragSource('FOLDER', folderSource, connectAndMonitor)(Folder));

export default connect(
  (state, props) => ({
    bookmarks: getBookmarksByFolder(state, props),
  }),
  (dispatch) => ({
    onDeleteBookmark: (id) => dispatch(deleteActiveBookmark(id)),
    getBookmarks: (id) => dispatch(fetchBookmarks(id)),
  }),
)(DraggableFolder);
