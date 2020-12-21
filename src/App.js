import logo from './logo.svg';
import './App.css';
import NavigationPanel from './components/Navigation';
import About from './components/About';
import Projects from './components/projects/Projects';
import PersonalLinks from './components/Links';
import React, { useReducer, forwardRef, useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group'; // ES6
import DecryptingText from './components/DecryptingText';
function App() {
  const [animating, setAnimating] = useState(true);
  const [pageIndex, setIndex] = useState(0);
  // Takes an integer and determines component content for it
  function onPageChanged(state, index) {
    let newPage = {}
    newPage.index = index;
    switch(index) {
      // About
      case 0:
        newPage.content = <About/>      
      break;
      // Projects
      case 1:
        newPage.content = <Projects/>
      break;
      // Links
      case 2:
        newPage.content = <PersonalLinks/>
      break;
      // Hosting
      case 3:
        newPage.content = <ReactDefault/>;
      break;
      
      default:
  
    }
    return newPage;
  }
  // Page content and index
  const [page, changePage] = useReducer(onPageChanged,
    {index: 0, content: <About/>});

  // Animate the page entering
  useEffect(()=>{
    setAnimating(true);
  }, [page]);

  // Change the page from NavigationPanel
  function cyclePage(index){
    setIndex(index);
    setAnimating(false);
  }

  return (
    <div className="App container-fluid p-0">
      <NavigationPanel selection={page.index} change={cyclePage}/>
      <div className="App-content">
        <CSSTransition
        classNames="folder"
        in={animating}
        addEndListener={
          (node, done) => {node.addEventListener('transitionend',(e) => {
            if(animating===false){
              changePage(pageIndex);
            }
            done(e);
          }, false);}
        }
        >
          { page.content }    
        </CSSTransition>  
      </div>
      
    
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
