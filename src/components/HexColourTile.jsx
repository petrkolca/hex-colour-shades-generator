import { useState } from "react";
import { ColorTile } from "./styles/HexColorTile.styled";
import { getContrastColor, rgbToHex } from "./utils/utils";


const HexColourTile = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bgColor = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  const textColor = getContrastColor(hexColor);

  //copy to clipboard function
  const copyToClipHandler = () => {
    setAlert(true);

    //copy current HEX colour value to clipboard
    navigator.clipboard.writeText(hex);
  }
  return (
    <ColorTile 
      className={`color`} 
      bcg={bgColor} 
      txtColor={textColor}
      onClick={copyToClipHandler}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </ColorTile>
  );
}

export default HexColourTile;