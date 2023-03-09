import { Fragment, useState } from "react"
import Values from "values.js"
import { GlobalStyle } from "./components/styles/GlobalStyle"
import StyledForm from "./components/Form"
import HexColourTile from "./components/HexColourTile"


function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const onChangeHandler = (input) => {
    setColor(input);

    // console.log("color is: ",input);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      
      if (!color) {
        throw new Error('Missing Error in Input!');
      }
      
      let colors = new Values(color).all(10);
      
      if (!colors) {
        throw new Error('Input HEX value is incorect!');
      }

      // console.log("colors list: ", colors);
      setList(colors);
      
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
        <section className="colors-list">
          <h2>list of Hex colours shades</h2>
          {list.map((color, index) => {
            return (
              <HexColourTile 
                key={index}
                index={index}
                {...color} 
                />
            )
          })}
        </section>
      </main>
    </Fragment>
  )
}

export default App
