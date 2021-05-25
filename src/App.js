import React, {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Contact from './contents/Contact';

const GlobalStyle = createGlobalStyle`
  body{
    ${props => props.theme.mode === 'dark'
      ? 'background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);'
      : 'background-image: linear-gradient(315deg, #02a388 0%, #f9f9f9 74%)'};
  }
`


function App() {

  const [theme, setTheme] = useState({ mode: 'light'});

  return (
    <ThemeProvider theme={theme}>
      <>
    <GlobalStyle />
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/portfolio">
    <Portfolio />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    <div class="back1 glass" onClick={e => setTheme(
      theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
    )}><i class={theme.mode === 'dark' ? "fa fa-sun i1" : "fa fa-moon i1"}></i></div>
    </div>
    </Router>
    </>
    </ThemeProvider>
    );
  }

  export default App;
