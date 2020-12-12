import logo from './logo.svg';
import './App.css';
import NavigationPanel from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import PersonalLinks from './components/Links'
import React, { useReducer, forwardRef, useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group'; // ES6
function App() {
  const nodeRef = React.useRef(null);
  const [animating, setAnimating] = useState(true);

  function onPageChanged(state, index) {
    if(index !== state.index){
      let newPage = {}
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
  }
  const [page, changePage] = useReducer(onPageChanged,
    {index: 0, content: <About ref={nodeRef}/>});

  useEffect(()=>{
    console.log("Showing");
    setAnimating(true);
    return ()=>{
      // setAnimating(false);
      // console.log("Cleanup")
    }
  }, [page]);

  // useEffect(()=>{
  //   console.log("Page Change");
  //   setAnimating(false);
  // }, [page]);

  function cyclePage(index){
    setAnimating(false);
    console.log("Done animating close")
    changePage(index);
  }

  // const [pageIndex, changePage] = useState(3);

  return (
    <div className="App container-fluid p-0">
      <NavigationPanel selection={page.index} change={cyclePage} animating={setAnimating}/>
      <div className="App-content">
        <CSSTransition
        nodeRef={nodeRef}
        classNames="folder"
        in={animating}
        timeout={500}
        unmountOnExit
        onEntered={()=>console.log("Enter")}
        onExit={()=>console.log("Exited")}
        >
          { page.content }    
        </CSSTransition>  
      </div>
      
    
    </div>
  );
}

const ReactDefault = forwardRef((props, ref) => {
  // const [animatingFolder, setAnimateFolder] = useState(true);
  // if(props.transitionOut){
  //   setAnimateFolder(false);
  // }
  // Set the callback for hiding animation
  // function TestCallback(bool){
  //   console.log("TESTCALLBACK");
  //   setAnimateFolder(bool);
  // }
  // props.callback(TestCallback);
  // useEffect(()=>{
  //   console.log("Mounting")
  //   return ()=>{
  //     console.log("Unmounting")
  //     setAnimateFolder(false);
  //   }
  // });
  return(
    <header ref={ref} id="pageContent" className="App-content">
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
});

export default App;
