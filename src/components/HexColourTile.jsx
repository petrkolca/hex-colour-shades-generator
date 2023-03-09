import { ColorTile } from "./styles/HexColorTile.styled";


const HexColourTile = ({rgb, weight, index}) => {



  return (
    <ColorTile>
      <div className="percent-value">{weight}%</div>
    </ColorTile>
  );
}

export default HexColourTile;