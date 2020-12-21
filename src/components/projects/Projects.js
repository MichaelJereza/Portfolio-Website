import {Suspense, lazy, useState, useEffect } from "react";
import {CSSTransition} from 'react-transition-group'; // ES6

import DecryptingText from "../DecryptingText";
import MalwareFramework from "./modules/MalwareFramework";
import Ncrypt from "./modules/Ncrypt";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import MealLogger from "./modules/MealLogger";

function Project (props) {

    const [projectView, setProjectView] = useState({
        index: 0,
        loadVideo: true,
    });

    const [animationTransition, setAnimateTransition] = useState({
        animateIn: true,
        nextIndex: null
    });

    function getIndexContent(nexIndex) {
        let newView;
        switch(nexIndex) {
            case 0: 
                newView = <MalwareFramework lazyVideo={projectView.loadVideo}/>;
                break;
            case 1:
                newView = <Ncrypt />;                    
                break;
            case 2:
                newView = <MealLogger />;
                break;
            default:
        }

        return newView;
    }

    const [clickableNav, setClickableNav] = useState({"left": true, "right": true});

    let leftNav, rightNav;
    
    if(clickableNav.left && projectView.index !== 0) {
        leftNav = (
        <button onClick={()=>{changeView(-1)}} className="btn btn-link" >
            <FontAwesomeIcon icon={faChevronLeft} color="white"/>
        </button>)
    } else {
        leftNav = (
        <button onClick={()=>{changeView(-1)}} className="btn btn-link" disabled>
            <FontAwesomeIcon icon={faChevronLeft} color="white"/>
        </button>)
    }

    if(clickableNav.right && projectView.index !== 2) {
        rightNav = (
        <button onClick={()=>{changeView(1)}} className="btn btn-link" >
            <FontAwesomeIcon icon={faChevronRight} color="white"/>
        </button>)
    } else {
        rightNav = (
        <button onClick={()=>{changeView(1)}} className="btn btn-link" disabled>
            <FontAwesomeIcon icon={faChevronRight} color="white"/>
        </button>)
    }

    // increment should be +1 or -1
    function changeView(increment) {
        let newIndex = projectView.index + increment
        if(newIndex >= 0 && newIndex <= 2) {
            // Close animation and set next
            setAnimateTransition({
                animateIn: false,
                nextIndex: newIndex
            });
        }
    }

    useEffect(()=>{
        // Play the show animation
        setAnimateTransition({
            animateIn: true,
            nextIndex: null,
        })
    }, [projectView.index])

    useEffect(()=>{
        if(animationTransition.animateIn === false){
            setClickableNav({
                "left": false,
                "right": false
            });
        }

        
    }, [animationTransition.animateIn]);

    return(

        <div className="text-justify">


            <span className="d-flex justify-content-between">
                {/* <button onClick={()=>{changeView(-1)}} className="btn btn-link">
                    <FontAwesomeIcon icon={faChevronLeft} color="white"/>
                </button> */}
                {leftNav}

                <h1><DecryptingText 
                    textContent="Projects" 
                    timeout={25}
                    iterations={3}/></h1>

                {/* <button onClick={()=>{changeView(1)}} className="btn btn-link" >
                    <FontAwesomeIcon icon={faChevronRight} color="white"/>
                </button> */}
                {rightNav}
            </span>


            <CSSTransition
                classNames="project-transition"
                in={animationTransition.animateIn}
                addEndListener={
                    (node, done) => {node.addEventListener('transitionend',(e) => {
                        if(animationTransition.animateIn===false){
                            // setContent(getIndexContent(projectView.index));
                            let loadingVideo = false;
                            if(animationTransition.nextIndex == 0) {
                                loadingVideo = true;
                            }
                            setProjectView({
                                index: animationTransition.nextIndex,
                                loadVideo: loadingVideo
                            })
                        } else {
                            setClickableNav({
                                "left": true,
                                "right": true
                            })
                        }
                        done(e);
                    }, false);}
                }>
                { getIndexContent(projectView.index) }    
            </CSSTransition>  


        </div>
    )  
};

export default Project;