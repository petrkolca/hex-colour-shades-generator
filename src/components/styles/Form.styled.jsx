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

}
  
`