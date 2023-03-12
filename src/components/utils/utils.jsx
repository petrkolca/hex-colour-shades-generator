function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

// from RGB to HEX color
export const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hexColor) {
  // Remove the hash symbol from the start of the HEX color
  // hexColor = hexColor.replace('#', '');

  // Convert the HEX color to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Return an object with the RGB values
  return { r, g, b };
}


export const getContrastColor = (hexColor) => {
  // Convert the HEX color to an RGB color
  const rgbColor = hexToRgb(hexColor);

  // Calculate the brightness of the color
  const brightness = (299 * rgbColor.r + 587 * rgbColor.g + 114 * rgbColor.b) / 1000;

  console.log('brightness of colour: ', brightness);
  // If the brightness is greater than 128, the color is light; otherwise, it's dark
  return brightness > 128 ? '#393082' : '#ffffff';
}

