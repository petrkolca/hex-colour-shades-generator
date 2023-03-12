import { Fragment, useState } from "react"
import Values from "values.js"
import { GlobalStyle } from "./components/styles/GlobalStyle"
import StyledForm from "./components/Form"
import HexColourTile from "./components/HexColourTile"


const initialColorHueValue = () => {
  // set default colour Hue with 10/100 shades
  return new Values("#393082").all(12.5);
}

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  // setting up list with default inital Value on app load
  const [list, setList] = useState(initialColorHueValue);

  const onChangeHandler = (input) => {
    setColor(input);

    // console.log("color is: ",input);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      setError(false);

      if (!color) {
        throw new Error('Missing Error in Input!');
      }
      
      let colors = new Values(color).all(12.5);
      
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
          {list.map((color, index) => {
            return (
              <HexColourTile 
                key={index}
                index={index}
                hexColor={color.hex}
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
