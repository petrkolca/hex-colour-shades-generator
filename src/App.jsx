import { Fragment, useState } from "react"
import Button from "./components/Button"
import Values from "values.js"
import { GlobalStyle } from "./components/styles/GlobalStyle"
import StyledForm from "./components/Form"


function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("color: ", color);
  }


  return (
    <Fragment>
      <GlobalStyle />
      <main>
        <StyledForm className="section" />
        <section className="section">
          <h2>list of Hex colours shades</h2>
        </section>
      </main>
    </Fragment>
  )
}

export default App
