import React from 'react';
import PropTypes from 'prop-types';
import MorphPropTypes from './prop-types';

const ContentControl = ({
  background,
  foreground,
  size,
  scale,
  margin,
  padding,
  child,
  contentAlignment,
  horizontalStretch,
}) => {
  let scaleFactor = 1;
  switch (scale.toLowerCase()) {
    case 's':
      scaleFactor = 0.8;
      break;
    case 'm':
      scaleFactor = 1;
      break;
    case 'l':
      scaleFactor = 1.2;
      break;
    case 'xl':
      scaleFactor = 1.4;
      break;
    default:
      scaleFactor = 1;
      break;
  }

  let fontSize = 16;
  switch (size.toLowerCase()) {
    case 'xxs':
      fontSize = 10;
      break;
    case 'xs':
      fontSize = 12;
      break;
    case 's':
      fontSize = 14;
      break;
    case 'm':
      fontSize = 16;
      break;
    case 'l':
      fontSize = 18;
      break;
    case 'xl':
      fontSize = 22;
      break;
    case 'xxl':
      fontSize = 24;
      break;
    default:
      fontSize = 16;
  }

  let justifyContent = 'flex-start';
  const lowerJustifyContent = contentAlignment.toLowerCase();
  switch (lowerJustifyContent) {
    case 'start':
      justifyContent = 'flex-start';
      break;
    case 'center':
      justifyContent = 'center';
      break;
    case 'end':
      justifyContent = 'flex-end';
      break;
    case 'space-between':
    case 'space-around':
    case 'space-evenly':
      justifyContent = lowerJustifyContent;
      break;
    default:
      justifyContent = 'flex-start';
      break;
  }

  const containerStyle = {
    minHeight: '100%',
    display: `${horizontalStretch ? 'flex' : 'inline-flex'}`,
    flex: 1,
    flexGrow: 1,
  };

  const contentPaddingStyle = {
    justifyContent,
    flex: 1,
    flexGrow: 1,
  };
  const contentMarginStyle = {
    fontSize: `${fontSize * scaleFactor}px`,
    backgroundColor: background,
    color: foreground,
    justifyContent,
    flex: 1,
    flexGrow: 1,
  };

  if (padding) {
    contentPaddingStyle.marginLeft = (padding.left || padding.padding || 0) * scaleFactor;
    contentPaddingStyle.marginTop = (padding.top || padding.padding || 0) * scaleFactor;
    contentPaddingStyle.marginRight = (padding.right || padding.padding || 0) * scaleFactor;
    contentPaddingStyle.marginBottom = (padding.bottom || padding.padding || 0) * scaleFactor;
  }

  if (margin) {
    contentMarginStyle.marginLeft = (margin.left || margin.margin || 0) * scaleFactor;
    contentMarginStyle.marginTop = (margin.top || margin.margin || 0) * scaleFactor;
    contentMarginStyle.marginRight = (margin.right || margin.margin || 0) * scaleFactor;
    contentMarginStyle.marginBottom = (margin.bottom || margin.margin || 0) * scaleFactor;
  }

  return (
    <div style={containerStyle}>
      <div style={contentMarginStyle}>
        <div style={contentPaddingStyle}>{child}</div>
      </div>
    </div>
  );
};

ContentControl.defaultProps = {
  background: '#ffffff00',
  foreground: '#000000ff',
  size: 'm',
  scale: 'm',
  margin: null,
  padding: null,
  child: null,
  contentAlignment: 'start',
  horizontalStretch: false,
};
ContentControl.propTypes = {
  background: MorphPropTypes.hexColorStringWithAlpha,
  foreground: MorphPropTypes.hexColorStringWithAlpha,
  size: MorphPropTypes.maatMuiControlSize,
  scale: MorphPropTypes.maatMuiScaleFactor,
  margin: MorphPropTypes.margin,
  padding: MorphPropTypes.padding,
  child: MorphPropTypes.child,
  contentAlignment: MorphPropTypes.contentAlignment,
  horizontalStretch: PropTypes.bool,
};

export default ContentControl;
