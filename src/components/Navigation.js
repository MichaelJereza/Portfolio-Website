import './Navigation.css'
import React from 'react';

function Navigation(props) {
    
    let selection = {
        "about": false,
        "projects": false,
        "links": false,
        "hosting": false
    };

    // If user's navigate to "/" it will return "" from useLocation()
    if(props.selection==="") {
        selection["about"] = true;
    } else {
        selection[props.selection] = true;
    }

    let alreadySelected = false;

    function onlySelectInActive (route) {
        // Prevent navigating to a new location while animation plays
        if(alreadySelected){
            return;
        }
        
        if(!selection[route]) {
            alreadySelected = true;
            props.change(route);
        }
    }

    return (
        <div className="Navigation-bar">
            <li 
                className={"nav-item btn btn-lg btn-dark "+ (selection["about"] ? "active" : "")} 
                onClick={()=>{onlySelectInActive("about")}}>
                About
            </li>
            <li 
                className={"nav-item btn btn-lg btn-dark "+ (selection["projects"] ? "active" : "")} 
                onClick={()=>{onlySelectInActive("projects")}}>
                Projects
            </li>
            <li 
                className={"nav-item btn btn-lg btn-dark "+ (selection["links"] ? "active" : "")} 
                onClick={()=>{onlySelectInActive("links")}}>
                Links
            </li>
            <li 
                className={"nav-item btn btn-lg btn-dark "+(selection["hosting"] ? "active" : "")} 
                onClick={()=>{onlySelectInActive("hosting")}}>
                Hosting
            </li>
      </div>
    )
}

export default Navigation;