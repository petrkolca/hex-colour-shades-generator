import { useState } from "react";
import { ColorTile } from "./styles/HexColorTile.styled";
import rgbToHex from "./utils/utils";


const HexColourTile = ({ rgb, weight, index, hexColor }) => {
  const bgColor = rgb.join(",");
  const hex = rgbToHex(...rgb)


  return (
    <ColorTile className={`color`} bcg={bgColor}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </ColorTile>
  );
}

export default HexColourTile;