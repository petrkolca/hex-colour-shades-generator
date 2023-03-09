import Button from "./Button";
import Input from "./Input";
import { StyledFormCtn } from "./styles/Form.styled";

const StyledForm = (props) => {
  return (
    <>
      <StyledFormCtn className={props.className}>
        <h1>Hex Color Generator</h1>
        <form action="">
          <Input />
          <Button />
        </form>
      </StyledFormCtn>
    </>
  );
}

export default StyledForm;