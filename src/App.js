import logo from './logo.svg';
import './App.css';
import NavigationPanel from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import PersonalLinks from './components/Links'
import React, {useState, useReducer, useRef, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group'; // ES6
function App() {
  const nodeRef = React.useRef(null);
  var animation;
  
  function onPageChanged(state, index) {
    let newPage = {}
    // stop animations if index == -1;
    if(index === -1) {
      console.log("Done animating")
      state.animate = false;
      return state;
    }
    
    newPage.index = index;
    switch(index) {
      // About
      case 0:
        newPage.content = <About ref={nodeRef}/>      
      break;
      // Projects
      case 1:
        newPage.content = <Projects ref={nodeRef}/>
      break;
      // Links
      case 2:
        newPage.content = <PersonalLinks ref={nodeRef}/>
      break;
      // Hosting
      case 3:
        newPage.content = <ReactDefault ref={nodeRef}/>;
      break;
      
      default:
  
    }
    return newPage;
  }

  useEffect(()=>{
    animation=true;
    console.log("UseEffect")
    return ()=>{
      console.log("Cleanup")
      animation=false;
    }
  });

  function handlePageChange (index) {
    setAnimateFolder(false);
    changePage(index);
  }

  // const [pageIndex, changePage] = useState(3);
  const [page, changePage] = useReducer(onPageChanged,
    {index: 0, content: <About />, animate: false});
  const [animatingFolder, setAnimateFolder] = useState(false);

  return (
    <div className="App">
      <NavigationPanel selection={page.index} change={changePage}/>
      <CSSTransition
        nodeRef={nodeRef}
        timeout={500}
        classNames="folder"
        in={animatingFolder}
        // onEntered={()=>animation=false}
        onExited={()=>console.log("Exited")}>
        { page.content }    
      </CSSTransition>  
    
    </div>
  );
}

function ReactDefault() {
  return(
    <header id="pageContent" className="App-content">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This website was built with:</p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">React</li>
        <li className="list-group-item">Webpack</li>
        <li className="list-group-item">Node Package Manager</li>
        <li className="list-group-item">Express</li>
      </ul>
    </header>
  )
}

export default App;
