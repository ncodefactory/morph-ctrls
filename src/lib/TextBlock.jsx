import React from 'react';
import PropTypes from 'prop-types';
import MorphPropTypes from './prop-types';
import ContentControl from './ContentControl';

const TextBlock = ({
  text,
  wrap,
  bold,
  underline,
  italic,
  background,
  foreground,
  size,
  scale,
  margin,
  borderThickness,
  borderColor,
  borderStyle,
  padding,
  textAlignment,
  inline,
  minWidth,
  width,
  minHeight,
  height,
}) => {
  const style = {};

  if (bold) {
    style.fontWeight = 'bold';
  }

  if (italic) {
    style.fontStyle = 'italic';
  }

  if (underline) {
    style.textDecorationLine = 'underline';
  }

  if (!wrap) {
    style.whiteSpace = 'nowrap';
    style.overflow = 'hidden';
    style.textOverflow = 'ellipsis';
  }

  return (
    <ContentControl
      background={background}
      foreground={foreground}
      size={size}
      scale={scale}
      margin={margin}
      borderThickness={borderThickness}
      borderColor={borderColor}
      borderStyle={borderStyle}
      padding={padding}
      contentAlignment={textAlignment}
      inline={inline}
      minWidth={minWidth}
      minHeight={minHeight}
      width={width}
      height={height}
      content={<div style={style}>{text}</div>}
    />
  );
};

TextBlock.defaultProps = {
  text: null,
  wrap: false,
  bold: false,
  underline: false,
  italic: false,
  background: '#ffffff00',
  foreground: '#000000ff',
  size: 'm',
  scale: 'm',
  margin: null,
  padding: null,
  borderThickness: { borderThickness: 1 },
  borderStyle: 'none',
  borderColor: '#000000ff',
  textAlignment: 'left',
  inline: false,
  minWidth: null,
  minHeight: null,
  width: null,
  height: null,
};

TextBlock.propTypes = {
  text: PropTypes.string,
  wrap: PropTypes.bool,
  bold: PropTypes.bool,
  underline: PropTypes.bool,
  italic: PropTypes.bool,
  background: MorphPropTypes.hexColorStringWithAlpha,
  borderColor: MorphPropTypes.hexColorStringWithAlpha,
  borderStyle: MorphPropTypes.borderStyle,
  borderThickness: MorphPropTypes.borderThickness,
  foreground: MorphPropTypes.hexColorStringWithAlpha,
  size: MorphPropTypes.maatMuiControlSize,
  scale: MorphPropTypes.maatMuiScaleFactor,
  margin: MorphPropTypes.margin,
  padding: MorphPropTypes.padding,
  textAlignment: MorphPropTypes.contentAlignment,
  inline: PropTypes.bool,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default TextBlock;
