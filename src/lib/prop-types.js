import PropTypes from 'prop-types';
import customPropType from '@ncodefactory/prop-types-custom';
import isValidHexColorString from './color-string-validator';

const isValidControlSize = (value) => {
  const upCaseValue = value.toUpperCase();
  return (
    upCaseValue === 'XXS'
    || upCaseValue === 'XS'
    || upCaseValue === 'S'
    || upCaseValue === 'M'
    || upCaseValue === 'L'
    || upCaseValue === 'XL'
    || upCaseValue === 'XXL'
  );
};

const isValidScaleFactor = (value) => {
  const upCaseValue = value.toUpperCase();
  return upCaseValue === 'S' || upCaseValue === 'M' || upCaseValue === 'L' || upCaseValue === 'XL';
};

const isValidContentAlignment = (value) => {
  const upCaseValue = value.toUpperCase();
  return upCaseValue === 'LEFT' || upCaseValue === 'CENTER' || upCaseValue === 'RIGHT';
};

const isValidBorderStyle = (value) => {
  const upCaseValue = value.toUpperCase();
  return (
    upCaseValue === 'NONE'
    || upCaseValue === 'DOTTED'
    || upCaseValue === 'DASHED'
    || upCaseValue === 'SOLID'
    || upCaseValue === 'DOUBLE'
    || upCaseValue === 'GROOVE'
    || upCaseValue === 'RIDGE'
    || upCaseValue === 'INSET'
    || upCaseValue === 'OUTSET'
    || upCaseValue === 'HIDDEN'
  );
};

const isValidOrientation = (value) => {
  const upCaseValue = value.toUpperCase();
  return upCaseValue === 'HORIZONTAL' || upCaseValue === 'VERTICAL';
};

const hexColorStringWithoutAlphaPropType = customPropType('hexColorStringWithoutAlpha', value => isValidHexColorString(value, false));
const hexColorStringWithAlphaPropType = customPropType('hexColorStringWithAlpha', value => isValidHexColorString(value));
const maatMuiControlSizePropType = customPropType('maatMuiControlSize', value => isValidControlSize(value));
const maatMuiScaleFactorPropType = customPropType('maatMuiScaleFactor', value => isValidScaleFactor(value));
const contentAlignmentPropType = customPropType('contentAlignment', value => isValidContentAlignment(value));
const orientationPropType = customPropType('orientation', value => isValidOrientation(value));
const borderStylePropType = customPropType('borderStyle', value => isValidBorderStyle(value));
const MorphPropTypes = {
  borderStyle: borderStylePropType,
  borderThickness: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    borderThickness: PropTypes.number,
  }),
  child: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  contentAlignment: contentAlignmentPropType,
  hexColorStringWithoutAlpha: hexColorStringWithoutAlphaPropType,
  hexColorStringWithAlpha: hexColorStringWithAlphaPropType,
  maatMuiControlSize: maatMuiControlSizePropType,
  maatMuiScaleFactor: maatMuiScaleFactorPropType,
  margin: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    margin: PropTypes.number,
  }),
  orientation: orientationPropType,
  padding: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    padding: PropTypes.number,
  }),
};
export default MorphPropTypes;
