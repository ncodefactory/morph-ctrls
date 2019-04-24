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
  return (
    upCaseValue === 'START'
    || upCaseValue === 'END'
    || upCaseValue === 'CENTER'
    || upCaseValue === 'SPACE-BETWEEN'
    || upCaseValue === 'SPACE-AROUND'
    || upCaseValue === 'SPACE-EVENLY'
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
const contentAlignmentPropType = customPropType('textAlignment', value => isValidContentAlignment(value));
const orientationPropType = customPropType('orientation', value => isValidOrientation(value));
const MorphPropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  contentAlignment: contentAlignmentPropType,
  hexColorStringWithoutAlpha: hexColorStringWithoutAlphaPropType,
  hexColorStringWithAlpha: hexColorStringWithAlphaPropType,
  maatMuiControlSize: maatMuiControlSizePropType,
  maatMuiScaleFactor: maatMuiScaleFactorPropType,
  margin:
    PropTypes.shape({
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired,
    })
    || PropTypes.shape({
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
    })
    || PropTypes.shape({
      margin: PropTypes.number.isRequired,
    }),
  orientation: orientationPropType,
  padding:
    PropTypes.shape({
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired,
    })
    || PropTypes.shape({
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
    })
    || PropTypes.shape({
      padding: PropTypes.number.isRequired,
    }),
};
export default MorphPropTypes;
