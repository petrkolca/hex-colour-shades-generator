import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    // variables
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 1rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;
  }

  /***************
  Global Styles
  ***************/

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus:not(.focus-visible) {
    outline: none;
  }

  body {
    ${'' /* background-image: linear-gradient(to bottom, #f7e9e2, #dadef1 , hsla(20,57%,93%,1)); */}
    background-image: linear-gradient(180deg, hsla(244, 100%, 97%, 1) 0%, hsla(246, 55%, 83%, 1) 50%, hsla(246, 43%, 73%, 1) 100%);
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    min-width: 320px;
  }

  ul {
    list-style-type: none;
  }
  
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 1.75rem;
  }
  h2 {
    font-size: 1.25rem;
  }
  h3, h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: inherit;
  }
  
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 2.3rem;
    }
    h2 {
      font-size: 1.85rem;
    }
    h3, h4 {
      font-size: 1.35rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  /* section */
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
      padding-left: 2vw;
      padding-right: 2vw;
    }
  }

  .colors-list {
    ${'' /* min-height: calc(100vh - 100px); */}
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    ${'' /* grid-template-rows: repeat(auto-fit, minmax(96px, 1fr)); */}
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #393082;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
  }
`