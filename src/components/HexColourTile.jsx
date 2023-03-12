import { useState } from "react";
import { ColorTile } from "./styles/HexColorTile.styled";
import { getContrastColor, rgbToHex } from "./utils/utils";


const HexColourTile = ({ rgb, weight, index, hexColor }) => {
  const bgColor = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  const textColor = getContrastColor(hexColor);


  return (
    <ColorTile className={`color`} bcg={bgColor} txtColor={textColor}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </ColorTile>
  );
}

export default HexColourTile;