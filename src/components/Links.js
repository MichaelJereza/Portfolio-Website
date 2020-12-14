import { forwardRef } from "react";
import DecryptingText from "./DecryptingText";

const PersonalLinks = forwardRef((props, ref) => {
    return(
        // <TransitionGroup          transitionName="slide"          transitionEnterTimeout={500}          transitionLeaveTimeout={300}>

            <div ref={ref} >
                <h1>Links</h1>
                <div className="text-justify">
                    
                    <h2><a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.mike.android.ncrypt" className="App-link">
                        <DecryptingText textContent={"Ncrypt"} timeout={80}>
                        </DecryptingText>
                    </a></h2>
                    <h2><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-jereza-360107181/" className="App-link">
                        <DecryptingText textContent={"LinkedIn"} timeout={78}>
                        </DecryptingText>
                    </a></h2>
                    <h2><a target="_blank" rel="noreferrer" href="https://github.com/MichaelJereza" className="App-link">
                        <DecryptingText textContent={"Github"} timeout={80}>
                        </DecryptingText>    
                    </a></h2>
                </div>
            </div>
        
        // </TransitionGroup>
    )
});

export default PersonalLinks;