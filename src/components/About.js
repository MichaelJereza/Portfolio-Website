import { forwardRef } from "react";
import DecryptingText from "./DecryptingText";

const About = forwardRef((props, ref) => {
    let description = `
    I am a full-stack web developer with experience working on interactive web applications and exchanging information through API implementations. I want to apply my skillset to protect against known and unknown threats using security practices.
    I have a detailed background in network security, including network fuzzing and diagnostics. My security abilities include offensive and defensive security practices. This comes from my experience with digital forensics, penetration testing, and reverse engineering.
    I'm a soon to be college graduate.
    At Oregon State University I've gained important developer skills for low-level languages, web applications, and mobile development.
    My specialization is security, which allows me to leverage my knowledge to defend against many common vulnerabilities and development pitfalls.
    I am working for Oregon State University Client Services as a developer for University IT tools. At my job I've gained valuable experience working on large projects, different web stacks, bundling web applications to face the public, and avoiding exposure of sensitive information.
    `
    return(
        <div ref={ref} className="text-left">

            <h1><DecryptingText 
                textContent={"Michael Jereza"} 
                timeout={25}
                iterations={3}
                /></h1>
            
            <div className="">
                {/* <DecryptingText textContent={description} timeout={1}/> */}
                
                {/* <p>
                <DecryptingText timeout={5} textContent={`I am a full-stack web developer with experience working on interactive web applications and exchanging information through API implementations. I want to apply my skillset to protect against known and unknown threats using security practices.`} />
                </p> */}
                
               
                {/* <p>
                <DecryptingText timeout={10} textContent={`I have a detailed background in network security, including network fuzzing and diagnostics. My security abilities include offensive and defensive security practices. This comes from my experience with digital forensics, penetration testing, and reverse engineering.
                `} /> 
                </p> */}
                
                {/* <p>
                <DecryptingText timeout={15} textContent={`I'm a soon to be college  graduate.
                    At Oregon State University I've gained important developer skills for low-level languages, web applications, and mobile development.
                    My specialization is security, which allows me to leverage my knowledge to defend against many common vulnerabilities and development pitfalls.
                    I am working for Oregon State University Client Services as a developer for University IT tools. At my job I've gained valuable experience working on large projects, different web stacks, bundling web applications to face the public, and avoiding exposure of sensitive information.
                `} /> 
                </p>  */}
                
                


                <p>
                    I am a full-stack web developer with experience working on interactive web applications and exchanging information through API implementations. I want to apply my skillset to protect against known and unknown threats using security practices.
                </p>
                <p>
                    I have a detailed background in network security, including network fuzzing and diagnostics. My security abilities include offensive and defensive security practices. This comes from my experience with digital forensics, penetration testing, and reverse engineering.
                </p>

                <p >
                    I will soon graduate from Oregon State University with a Bachelor of the Sciences in Computer Science.
                    At the University I've gained important developer skills for low-level languages, web applications, and mobile development.
                    My specialization is security, which allows me to leverage my knowledge to defend against many common vulnerabilities and development pitfalls.
                    I am working for Oregon State University Client Services as a developer for University IT tools. At my job I've gained valuable experience working on large projects, different web stacks, bundling web applications to face the public, and avoiding exposure of sensitive information.
                </p>


            </div>
        </div>
    )
});

export default About;