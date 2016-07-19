import React from 'react';
import { connect } from 'react-redux';

const headingStyle = {
  margin: 0,
  padding: 0,
  color: '#fff',
  fontWeight: 300,
  fontSize: 20,
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

const Heading = connect(
  mapStateToProps,
)(RenderHeading);

export default Heading;
