import './Navigation.css'
import React, {useReducer} from 'react';

function Navigation(props) {
    let selection = [false, false, false, false];
    selection[props.selection] = true;
    const [navSelected, setNavSelected] = useReducer(onNavClicked, selection);

    function onlySelectInActive (index) {
        if(!navSelected[index]) {
            setNavSelected(index); 
            props.change(index);
        } else {
        }
    }

    return (
        <div className="Navigation-bar">
            <li 
                className={"nav-item btn btn-lg btn-dark "+ (navSelected[0] ? "active" : "")} 
                onClick={()=>{onlySelectInActive(0)}}>
                About
            </li>
            <li 
                className={"nav-item btn btn-lg btn-dark "+ (navSelected[1] ? "active" : "")} 
                onClick={()=>{onlySelectInActive(1)}}>
                Projects
            </li>
            <li 
                className={"nav-item btn btn-lg btn-dark "+ (navSelected[2] ? "active" : "")} 
                onClick={()=>{onlySelectInActive(2)}}>
                Links
            </li>
            <li 
                className={"nav-item btn btn-lg btn-dark "+(navSelected[3] ? "active" : "")} 
                onClick={()=>{onlySelectInActive(3)}}>
                Hosting
            </li>
      </div>
    )
}

function onNavClicked(state, index){
    state = [false, false, false, false];
    state[index] = true;
    return state;
}

export default Navigation;