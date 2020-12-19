import { forwardRef } from "react";
import DecryptingText from "./DecryptingText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

const PersonalLinks = forwardRef((props, ref) => {
    return(
        // <TransitionGroup          transitionName="slide"          transitionEnterTimeout={500}          transitionLeaveTimeout={300}>

            <div ref={ref} >
                <h1><DecryptingText
                    textContent={"Links"}
                    timeout={25}
                    iterations={3}
                    /></h1>
                <div className="text-justify">
                    
                    <h2><a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.mike.android.ncrypt" className="App-link">
                        <FontAwesomeIcon icon={faGooglePlay} color="white"/>
                        <DecryptingText textContent={"Ncrypt"} timeout={80}/>
                    </a></h2>
                    <h2><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-jereza-360107181/" className="App-link">
                        <FontAwesomeIcon icon={faLinkedin} color="white"/>
                        <DecryptingText textContent={"LinkedIn"} timeout={73}/>
                    </a></h2>
                    <h2><a target="_blank" rel="noreferrer" href="https://github.com/MichaelJereza" className="App-link">
                        <FontAwesomeIcon icon={faGithub} color="white"/>
                        <DecryptingText textContent={"Github"} timeout={80}/>
                    </a></h2>
                </div>
            </div>
        
        // </TransitionGroup>
    )
});

export default PersonalLinks;