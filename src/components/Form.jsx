import { useEffect } from "react";
import Button from "./Button";
import { StyledFormCtn, StyledInput } from "./styles/Form.styled";

const StyledForm = ({className, inputValue, onSubmit, onChange}) => {

  const onChangeHandler = (e) => {
    onChange(e.target.value);
    console.log('onChange is: ', e.target.value);  
  };

  useEffect(() => {

    console.log('input value is: ', inputValue);
  }, [inputValue])
  
  return (
    <>
      <StyledFormCtn className={className}>
        <h1>Hex Color Generator</h1>
        <form onSubmit={onSubmit}>
          <StyledInput 
            type="text"
            value={inputValue}
            onChange={onChangeHandler}
          />
          <Button />
        </form>
      </StyledFormCtn>
    </>
  );
}

export default StyledForm;