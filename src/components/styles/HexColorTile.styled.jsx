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

  .alert {
    text-transform: uppercase;
    font-size: 0.65rem;
    margin-top: 0.5rem;
    color: ${props => props.txtColor === '#ffffff' ? '#b1b1b1' : "#393082"};
  }
`