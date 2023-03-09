import { Fragment, useState } from "react"
import Values from "values.js"
import { GlobalStyle } from "./components/styles/GlobalStyle"
import StyledForm from "./components/Form"


function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const onChangeHandler = (input) => {
    setColor(input.toString());

    // console.log("color is: ",input);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    try {

      
      if (!color) {
        throw new Error('Missing Error in Input!');
      }

      let colors = new Values(color).all(10);

      console.log("colors list: ", colors);
      
    } catch (error) {
      setError(true);
      console.log('error is: ', error.message);
    }

  }


  return (
    <Fragment>
      <GlobalStyle />
      <main>
        <StyledForm
          className="section"
          inputValue={color}
          onSubmit={submitHandler} 
          onChange={onChangeHandler} 
          errorState={error}
        />
        <section className="section">
          <h2>list of Hex colours shades</h2>
        </section>
      </main>
    </Fragment>
  )
}

export default App
