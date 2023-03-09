import styled from "styled-components";

export const StyledFormCtn = styled.section`
  
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  
  h1 {
    margin-bottom: 0.85rem;
  }
  
  form {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: center;

    h1 {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`

export const StyledInput = styled.input`
  border-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  outline: none !important;
  outline-width: 0;
  box-shadow: none;

  &:focus:not(:focus-visible) {
    box-shadow: 0 0 0 5px transparent;
  }

  &:focus-visible {
    outline-color: #7d76d7;
    box-shadow: 0 0 0 5px rgb(125, 118, 215, 0.5);
  }

  &.error {
    border: 2px solid #EF233C;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.85rem;
  }
`
