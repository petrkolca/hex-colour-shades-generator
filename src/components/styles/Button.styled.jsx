import styled from "styled-components";

export const StyledButton = styled.button`
  
  border-radius: 0;
  border: 1px solid transparent;
  padding: 0.65rem 0.85rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: inherit;
  background-color: #ffc233;
  color: #393082;
  cursor: pointer;
  border-color: transparent;
  transition: border-color 0.25s;
  
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  text-transform: capitalize;
  cursor: pointer;
  
  &:hover {
    border-color: #FFD266;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    background-color: #4840ba;
    color: white;

    &:hover {
      border-color: #646cff;
    }
  }
`