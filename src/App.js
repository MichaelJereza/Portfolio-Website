import logo from './logo.svg';
import './App.css';
import NavigationPanel from './components/Navigation';
import About from './components/About';
import Projects from './components/projects/Projects';
import PersonalLinks from './components/Links';

import React, { forwardRef, useEffect, useState} from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

import {CSSTransition} from 'react-transition-group'; // ES6
import DecryptingText from './components/DecryptingText';

function App () {

  const [animating, setAnimating] = useState(true);
  const [navClickable, setNavClickable] = useState(false);
  const [navSelected, setNavSelected] = useState(useLocation().pathname.slice(1));
  const [redirect, redirectTo] = useState(null);

  console.log(`Location ${useLocation().pathname}`)

  // Change the page from NavigationPanel
  function cyclePage(route){
    setAnimating(false);
    setNavSelected(route);
  }

  let content;

  // Remove redirect so it only renders oncce
  useEffect(() => {
    if(redirect!==null) {
      redirectTo(null);
    } 
    else if(animating===false && redirect===null) {
      setAnimating(true);

    }
  }, [redirect])
  
  if(redirect) {

    content = <Redirect to={"/"+redirect}/>;
  
  } else {

    content = (
      <div id="App-content">
        <CSSTransition
          classNames="folder"
          in={animating}
          addEndListener={
            (node, done) => {node.addEventListener('transitionend',(e) => {
              if(animating===false && redirect===null){
                redirectTo(navSelected);
              }
              done(e);
            }, {"once": true});}
          }
          unmountOnExit={true}>
          <Switch >
            <Route exact path = {["/", "/about"]}>
              <About/>
            </Route>
            <Route path = "/projects">
              <Projects/>
            </Route>
            <Route path = "/links">
              <PersonalLinks/>
            </Route>
            <Route path = "/hosting">
              <ReactDefault/>
            </Route>
          </Switch>
        </CSSTransition>  
         
      </div>
    );

  }

  return (

    <div className="App container-fluid p-0">
      <NavigationPanel selection={navSelected} change={cyclePage}/>
      {content}
    </div>
      
  );
}

const ReactDefault = forwardRef((props, ref) => {
  return(
    <header ref={ref} >
        <img src={logo} className="App-logo" alt="logo" />
        <p>This website was built with:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-nowrap"><DecryptingText 
            textContent="React"
            timeout={80}
            iterations={3}
            /></li>
          <li className="list-group-item text-nowrap"><DecryptingText 
            textContent="Webpack"
            timeout={80}
            iterations={3}
            /></li>
          <li className="list-group-item text-nowrap"><DecryptingText 
            textContent="Node Package Manager"
            timeout={33}
            iterations={3}
            /></li>
          <li className="list-group-item text-nowrap"><DecryptingText 
            textContent="Express"
            timeout={80}
            iterations={3}
            /></li>
          <li className="list-group-item text-nowrap"><DecryptingText 
            textContent="Github Pages"
            timeout={55}
            iterations={3}
            /></li>
        </ul>
    </header>    
  )
});

export default App;
