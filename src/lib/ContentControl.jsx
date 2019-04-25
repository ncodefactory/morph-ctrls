import React from 'react';
import PropTypes from 'prop-types';
import MorphPropTypes from './prop-types';

const ContentControl = ({
  background,
  foreground,
  size,
  scale,
  margin,
  borderThickness,
  borderColor,
  borderStyle,
  padding,
  contentAlignment,
  inline,
  minWidth,
  width,
  minHeight,
  height,
  children,
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

  let textAlign = 'left';
  const lowerJustifyContent = contentAlignment.toLowerCase();
  switch (lowerJustifyContent) {
    case 'left':
      textAlign = 'left';
      break;
    case 'center':
      textAlign = 'center';
      break;
    case 'right':
      textAlign = 'right';
      break;
    default:
      textAlign = 'left';
      break;
  }

  const style = {
    textAlign,
    backgroundColor: background,
    color: foreground,
    fontSize: `${fontSize * scaleFactor}px`,
  };

  if (minWidth) {
    style.minWidth = `${minWidth * scaleFactor}px`;
  }

  if (minHeight) {
    style.minHeight = `${minHeight * scaleFactor}px`;
  }

  if (width) {
    style.width = `${width * scaleFactor}px`;
  }

  if (height) {
    style.height = `${height * scaleFactor}px`;
  }

  if (inline) {
    style.display = 'inline-block';
  }

  if (padding) {
    style.paddingLeft = (padding.left || padding.padding || 0) * scaleFactor;
    style.paddingTop = (padding.top || padding.padding || 0) * scaleFactor;
    style.paddingRight = (padding.right || padding.padding || 0) * scaleFactor;
    style.paddingBottom = (padding.bottom || padding.padding || 0) * scaleFactor;
  }

  if (margin) {
    style.marginLeft = (margin.left || margin.margin || 0) * scaleFactor;
    style.marginTop = (margin.top || margin.margin || 0) * scaleFactor;
    style.marginRight = (margin.right || margin.margin || 0) * scaleFactor;
    style.marginBottom = (margin.bottom || margin.margin || 0) * scaleFactor;
  }

  if (borderThickness) {
    style.borderColor = borderColor;
    style.borderStyle = borderStyle;
    style.borderWidth = `${borderThickness.top
      || borderThickness.borderThickness
      || 0 * scaleFactor}px ${borderThickness.right
      || borderThickness.borderThickness
      || 0 * scaleFactor}px ${borderThickness.bottom
      || borderThickness.borderThickness
      || 0 * scaleFactor}px ${borderThickness.left
      || borderThickness.borderThickness
      || 0 * scaleFactor}px`;
  }

  return <div style={style}>{children}</div>;
};

ContentControl.defaultProps = {
  background: '#ffffff00',
  foreground: '#000000ff',
  size: 'm',
  scale: 'm',
  margin: null,
  padding: null,
  borderThickness: { borderThickness: 1 },
  borderStyle: 'none',
  borderColor: '#000000ff',
  children: null,
  contentAlignment: 'left',
  inline: false,
  minWidth: null,
  minHeight: null,
  width: null,
  height: null,
};
ContentControl.propTypes = {
  background: MorphPropTypes.hexColorStringWithAlpha,
  borderColor: MorphPropTypes.hexColorStringWithAlpha,
  borderStyle: MorphPropTypes.borderStyle,
  borderThickness: MorphPropTypes.borderThickness,
  foreground: MorphPropTypes.hexColorStringWithAlpha,
  size: MorphPropTypes.maatMuiControlSize,
  scale: MorphPropTypes.maatMuiScaleFactor,
  margin: MorphPropTypes.margin,
  padding: MorphPropTypes.padding,
  children: MorphPropTypes.child,
  contentAlignment: MorphPropTypes.contentAlignment,
  inline: PropTypes.bool,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ContentControl;
