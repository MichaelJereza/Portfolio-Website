import './Navigation.scss'
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
            <div 
                className={"nav-item btn-lg btn-foreground rounded-0"+ (selection["about"] ? " active" : "")} 
                onClick={()=>{onlySelectInActive("about")}}>
                About
            </div>
            <div 
                className={"nav-item btn-lg btn-foreground rounded-0"+ (selection["projects"] ? " active" : "")} 
                onClick={()=>{onlySelectInActive("projects")}}>
                Projects
            </div>
            <div 
                className={"nav-item btn-lg btn-foreground rounded-0"+ (selection["links"] ? " active" : "")} 
                onClick={()=>{onlySelectInActive("links")}}>
                Links
            </div>
            <div 
                className={"nav-item btn-lg btn-foreground rounded-0"+(selection["hosting"] ? " active" : "")} 
                onClick={()=>{onlySelectInActive("hosting")}}>
                Hosting
            </div>
      </div>
    )
}

export default Navigation;