import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const headingStyle = {
  margin: 0,
  padding: 0,
  color: 'rgba(0, 0, 0, 0.7)',
  fontWeight: 300,
  fontSize: 20,
};

const propTypes = {
  title: PropTypes.string.isRequired,
};

const RenderHeading = ({ title }) => (
  <h3 style={headingStyle}>{title}</h3>
);

const mapStateToProps = (state, ownProps) => {
  const getCurrentFolder = state.folders.items.find(bookmark => bookmark.id === ownProps.id) || '';
  const getTitle = getCurrentFolder.title || '';
  return {
    title: getTitle,
  };
};

RenderHeading.propTypes = propTypes;

export default connect(mapStateToProps)(RenderHeading);
