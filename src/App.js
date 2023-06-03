import React, { useState, useEffect } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const initialTheme = localStorage.getItem('theme' || 'light');
  const [tema, setTema] = useState(initialTheme === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', tema ? 'dark' : 'light');
  }, [tema]);
  
  const toggleTema  = () => {
    setTema((tema) => !tema)
  }
  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema = {tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
