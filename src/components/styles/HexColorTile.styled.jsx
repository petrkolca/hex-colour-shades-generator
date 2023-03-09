import styled from "styled-components";

export const ColorTile = styled.div`

  background-color: rgb(${props => props.bcg});
  color: ${props => props.txtColor};
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;
  
  .percent-value {
    margin-bottom: 0;
    color: inherit;
  }
  .color-value {
    color: inherit;
    margin-bottom: 0;
  }
`