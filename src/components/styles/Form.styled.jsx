import styled from "styled-components";

export const StyledFormCtn = styled.section`
  
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  
  h1 {
    margin-bottom: 0.85rem;
    margin-right: 2rem;
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
    }
  }
`

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
