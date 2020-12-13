import './Navigation.css'
import React, {useState, useEffect, useReducer} from 'react';

function Navigation(props) {
    let selection = [false, false, false, false];
    selection[props.selection] = true;
    const [navSelected, setNavSelected] = useReducer(onNavClicked, selection);

    return (
        // Fix height not max on this
        <div className="Navigation-bar navbar-nav flex-column">
            <li className={"nav-item btn btn-lg btn-dark "+ (navSelected[0] ? "active" : "")} onClick={()=>{setNavSelected(0); props.change(0)}}>
                About
            </li>
            <li className={"nav-item btn btn-lg btn-dark "+ (navSelected[1] ? "active" : "")} onClick={()=>{setNavSelected(1); props.change(1)}}>
                Projects
            </li>
            <li className={"nav-item btn btn-lg btn-dark "+ (navSelected[2] ? "active" : "")} onClick={()=>{setNavSelected(2); props.change(2)}}>
                Links
            </li>
            <li className={"nav-item btn btn-lg btn-dark "+ (navSelected[3] ? "active" : "")} onClick={()=>{setNavSelected(3); props.change(3)}}>
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