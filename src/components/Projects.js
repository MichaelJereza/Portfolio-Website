import {Suspense, lazy, useState, useEffect } from "react";
import DecryptingText from "./DecryptingText";
import nonLazyVideo from "./LazyVideo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

function Project (props) {

    const [loadVideo, setLoadVideo] = useState(true);
    let LazyVideo;
    if(loadVideo) {
        console.log("Lazy")
        LazyVideo = lazy(()=>import("./LazyVideo"));
    } else {
        // If not the first  time don't lazy load the video again
        // Eg: transition
        LazyVideo = nonLazyVideo
    }

    useEffect(()=>{
        setLoadVideo(false);
    }, [loadVideo === true])

    // Project Elements
    const malwareFramework = (<div>
        <h2>Malware Framework</h2>
        <p className="text-left">For my 2020 senior capstone project I am developing a series of malware with a group of three others. We are developing a denial of service attack, rootkit, keylogger, and ransomware. The goal of this project is to provide a high-level overview of malware, as well as provide a framework for future malware research capstones projects.</p>
        <Suspense fallback={<h1>Loading...</h1>}>
            <LazyVideo />                        
        </Suspense>

    </div>)
    
    const nCrypt = (<div>
        <h2>Ncrypt</h2>
        <h4>A Cryptographic Password Vault</h4>
        <p>I developed this Java-based Android application in early 2020, during my week-long spring break. My mom used to store passwords in plaintext on her phone, so I wanted to protect her from being compromised. I had also recently finished the Mobile Development class at OSU, and I wanted to design a "fun" and but useful application for security. The conclusion was an encryption vault that is fun and simple to use.</p>
    </div>)

    const mealLogger = (<div>
        <span className="row no-gutters justify-content-between">
            <h2>Meal Logger</h2>
            <a className="App-link" target="_blank" rel="noreferrer" href="https://github.com/MichaelJereza/final-project-meal-logger">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
        </span>
        <div className="row">
            <div className="col-md-4 col-sm-12 text-left">
                <p>Meal Logger provides an interface for tracking meals. Recording food items adds to a grand total for the meal's total nutritional value, which can be exported as a nutrition label. The interface also allows the user to capture an image and determines the appropriate meal based on recording time.</p>
            </div>

            <img alt="Meal Logger Food Label" className="img-fluid col-md-auto col-sm-12" src="https://raw.githubusercontent.com/MichaelJereza/final-project-meal-logger/master/images/meal_label.png"/>
        </div>
    </div>)

    const [projectView, setProjectView] = useState({
        index: 0,
        content: malwareFramework});

    useEffect(()=>{
        setLoadVideo(true);
    }, [projectView.index === 0])
    
    function changeView(nexIndex) {
        switch(nexIndex) {
            case 0: 
                setProjectView({
                    index: 0,
                    content: malwareFramework
                    
                });
                break;
            case 1:
                setProjectView({
                    index: 1,
                    content: nCrypt
                    
                });
                break;
            case 2:
                setProjectView({
                    index: 2,
                    content: mealLogger
                    
                });
                break;
            default:
        }
    }
    

    function prevView () {
        let newIndex = projectView.index-1; 
        if(newIndex >= 0) {
            changeView(newIndex);
        } 
    }

    function nextView() {
        let newIndex = projectView.index+1; 
        if(newIndex <= 2) {
            changeView(newIndex);
        }
    }
    const prevButton = projectView.index !== 0 ? 
    (
        <button onClick={prevView} className="btn btn-light">
            Prev
            {/* <span className="glyphicon glyphicon-chevron-left"></span> */}
        </button>
    ) : 
    (
        (
            <button onClick={prevView} className="btn btn-light" disabled>
                Prev
                {/* <span className="glyphicon glyphicon-chevron-left"></span> */}
            </button>
        )  
    )

    return(
        <div className="text-justify">
            <span className="d-flex justify-content-between">
                <button onClick={prevView} className="btn btn-link">
                    <FontAwesomeIcon icon={faChevronLeft} color="white"/>
                </button>

                <h1><DecryptingText 
                    textContent="Projects" 
                    timeout={25}
                    iterations={3}/></h1>

                <button onClick={nextView} className="btn btn-link" >
                    <FontAwesomeIcon icon={faChevronRight} color="white"/>
                </button>
            </span>
            {projectView.content}
            
        </div>
    )  
};

export default Project;