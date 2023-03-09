import styled from "styled-components";

export const ColorTile = styled.div`

  background-color: rgb(${props => props.bcg});
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;
  
  .percent-value {
    margin-bottom: 0;
    color: var(--clr-grey-1);
  }
  .color-value {
    color: var(--clr-grey-1);
    margin-bottom: 0;
  }
  .color-light .color-value {
    color: var(--clr-white);
  }
  .color-light .percent-value {
    color: var(--clr-white);
  }
`