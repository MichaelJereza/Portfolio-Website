import { forwardRef } from "react";
import DecryptingText from "./DecryptingText";

const About = forwardRef((props, ref) => {
    return(
        <div ref={ref} >

            <h1 className="text-nowrap"><DecryptingText 
                textContent={"Michael Jereza"} 
                timeout={25}
                iterations={3}
                /></h1>
            {/* <div className="row"> */}
                <div className="col-sm-12 col-lg-8 m-auto text-left">
                    <p>
                        I am a full-stack web developer with experience working on interactive web applications and exchanging information through API implementations. I want to apply my skillset to protect against known and unknown threats using security practices.
                    </p>
                    <p>
                        I have a detailed background in network security, including network fuzzing and diagnostics. As well as a general security skillset that includes digital forensics, penetration testing, and reverse engineering.
                    </p>

                    <p >
                        I will soon graduate from Oregon State University with a Bachelor of the Sciences in Computer Science.
                        At the University I've gained important developer skills for low-level languages, web applications, and mobile development.
                        I work as an IT developer. At my job I've maintain multiple projects, across different web stacks, bundling web applications, and auditing process logs.
                    </p>
                </div>
            {/* </div> */}
            
        </div>
    )
});

export default About;