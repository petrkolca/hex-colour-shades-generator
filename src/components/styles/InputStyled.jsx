import styled from "styled-components";

export const StyledInput = styled.input`
  border-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);

  &.error {
    border: 2px solid var(--clr-red-dark);
  }

  @media screen and (max-width: 576px) {
    font-size: 0.85rem;
  }
`