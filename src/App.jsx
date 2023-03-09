import { Fragment, useState } from 'react'
import Button from './components/Button'
import Values from 'values.js'
import { GlobalStyle } from './components/styles/GlobalStyle'


function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <main>
        <section className="section">
          <h1>Hex Color Generator</h1>
        </section>
      </main>
    </Fragment>
  )
}

export default App
