import {Suspense, lazy, useState, useEffect } from "react";
import {CSSTransition} from 'react-transition-group'; // ES6

import DecryptingText from "../DecryptingText";
import MalwareFramework from "./modules/MalwareFramework";
import Ncrypt from "./modules/Ncrypt";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import MealLogger from "./modules/MealLogger";

import './Projects.css'
import theme from '../../_theme.scss'

function Project (props) {

    return(

        <div className="text-justify">


            <span className="d-flex justify-content-center">
                {/* <button onClick={()=>{changeView(-1)}} className="btn btn-link">
                    <FontAwesomeIcon icon={faArrowCircleLeft} color="white"/>
                </button> */}

                <h1><DecryptingText 
                    textContent="Projects" 
                    timeout={40}
                    iterations={3}/></h1>

                {/* <button onClick={()=>{changeView(1)}} className="btn btn-link" >
                    <FontAwesomeIcon icon={faArrowCircleRight} color="white"/>
                </button> */}
            </span>

            <MalwareFramework/>
            <hr className="my-5"/>
            <Ncrypt />
            <hr className="my-5"/>
            <MealLogger />

            {/* <CSSTransition
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
            </CSSTransition>   */}


        </div>
    )  
};

export default Project;