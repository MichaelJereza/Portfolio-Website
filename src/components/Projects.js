import {Suspense, lazy, useState, useEffect } from "react";
import DecryptingText from "./DecryptingText";
import nonLazyVideo from "./LazyVideo";

function Contribution (props) {

    const [loadVideo, setLoadVideo] = useState(true);
    let LazyVideo;
    if(loadVideo) {
        LazyVideo = lazy(()=>import("./LazyVideo"));
    } else {
        // If not the first  time don't lazy load the video again
        // Eg: transition
        LazyVideo = nonLazyVideo
    }

    useEffect(()=>{
        setLoadVideo(false);
    })

    return(
        <div className="text-justify">
            <h1><DecryptingText 
                textContent="Projects" 
                timeout={25}
                iterations={3}/></h1>

                <div >
                    <h2>Malware Framework</h2>
                    <p>For my 2020 senior capstone project I am developing a series of malware with a group of three others. We are developing a denial of service attack, rootkit, keylogger, and ransomware. The goal of this project is to provide a high-level overview of malware, as well as provide a framework for future malware research capstones projects.</p>
                        <Suspense fallback={<h1>Loading...</h1>}>
                                <LazyVideo />                        
                        </Suspense>
                </div>

                <div >
                    <h2>Ncrypt</h2>
                    <h4>A Cryptographic Password Vault</h4>
                    <p>I developed this Java-based Android application in early 2020, during my week-long spring break. My mom used to store passwords in plaintext on her phone, so I wanted to protect her from being compromised. I had also recently finished the Mobile Development class at OSU, and I wanted to design a "fun" and but useful application for security. The conclusion was an encryption vault that is fun and simple to use.</p>
                </div>
                
                <div >
                    <h2>Meal Logger</h2>
                    <div >
                        <div >
                            <p>Meal Logger provides an interface for tracking meals. Recording food items adds to a grand total for the meal's total nutritional value, which can be exported as a nutrition label. The interface also allows the user to capture an image and determines the appropriate meal based on recording time.</p>
                        </div>
                        <img alt="Meal Logger Food Label" className="img-fluid" src="https://raw.githubusercontent.com/MichaelJereza/final-project-meal-logger/master/images/meal_label.png">
                        </img>
                    </div>
                </div>           
            
        </div>
    )  
};

export default Contribution;