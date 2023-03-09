import { useEffect } from "react";
import Button from "./Button";
import { StyledFormCtn, StyledInput } from "./styles/Form.styled";

const StyledForm = ({className, inputValue, onSubmit, onChange, errorState}) => {

  const onChangeHandler = (e) => {
    onChange(e.target.value);
    // console.log('onChange is: ', e.target.value);  
  };
  
  return (
    <>
      <StyledFormCtn className={className}>
        <h1>Hex Color Generator</h1>
        <form onSubmit={onSubmit}>
          <StyledInput 
            className={`${errorState ? "error" : null}`}
            type="text"
            value={inputValue}
            placeholder="#393082"
            onChange={onChangeHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
      </StyledFormCtn>
    </>
  );
}

export default StyledForm;