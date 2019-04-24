const isValidHexColor = (color, allowAlpha = true) => {
  if (color == null || !color || typeof color !== 'string') {
    return false;
  }

  const toValidateColor = color.substring(0, 1) === '#' ? color.substring(1) : null;

  if (allowAlpha) {
    switch (toValidateColor && toValidateColor.length) {
      case 3:
        return /^[0-9A-F]{3}$/i.test(toValidateColor);
      case 4:
        return /^[0-9A-F]{4}$/i.test(toValidateColor);
      case 6:
        return /^[0-9A-F]{6}$/i.test(toValidateColor);
      case 8:
        return /^[0-9A-F]{8}$/i.test(toValidateColor);
      default:
        return false;
    }
  }

  switch (toValidateColor && toValidateColor.length) {
    case 3:
      return /^[0-9A-F]{3}$/i.test(toValidateColor);
    case 6:
      return /^[0-9A-F]{6}$/i.test(toValidateColor);
    default:
      return false;
  }
};

export default isValidHexColor;
