import { forwardRef } from "react";
import DecryptingText from "./DecryptingText";
import "../App.scss"

const About = forwardRef((props, ref) => {
    return(
        <div ref={ref} >

            <h1 id="App-header" className="text-nowrap">
                <DecryptingText 
                textContent={"Michael Jereza"} 
                timeout={40}
                /></h1>
                <div className="col-md-12 col-lg-8 m-auto text-left">
                        <h2>Welcome to my website!</h2>
                        
                        <p>
                        I'm a full stack developer with the goal of applying software development to handle cyber security threats and incidents. 
                        </p>

                        <p>In addition to software development I'm also capable of the tasks required for:</p>
                        <ul>
                            <li>Linux System Administrator</li>
                            <li>Penetration Tester</li>
                            <li>Android Application Developer</li>
                            <li>Digital Forensics Analyst</li>
                        </ul>

                        <p>I apply a background in security with development experience to address risks in implementations and strategies.</p>
                        
                        <div className="row no-gutters">

                            < div className="col-sm-12 col-md-6 col-lg-4">
                                <h2>Platforms</h2>

                                <ul>
                                    <li>Linux</li>
                                    <li>Windows</li>
                                    <li>Hypervisor</li>
                                    <li>Docker</li>
                                    <li>AWS</li>                                    
                                </ul>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <h2>Languages</h2>

                                <ol>
                                    <li>Javscript / Typescript</li>
                                    <li>Python</li>
                                    <li>C++ / C</li>
                                    <li>Java</li>
                                    <li>Bash</li>
                                    <li>Haskell</li>
                                    
                                </ol>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <h2>Tools</h2>

                                <ul>
                                    <li>SSH / RDP</li>
                                    <li>GDB</li>
                                    <li>Firewalls</li>
                                    <li>Nginx</li>
                                    <li>Nmap</li>
                                    <li>Scapy</li>
                                    <li>IDS</li>
                                    <li>Hostapd</li>
                                    
                                </ul>
                            </div>

                        </div>

                        


                    {/* <p>
                        I am a full-stack web developer with experience working on interactive web applications and exchanging information through API implementations. I want to apply my skillset to protect against known and unknown threats using security practices.
                    </p>
                    <p>
                        I have a detailed background in network security, including network fuzzing and diagnostics. As well as a general security skillset that includes digital forensics, penetration testing, and reverse engineering.
                    </p>

                    <p >
                        I will soon graduate from Oregon State University with a Bachelor of the Sciences in Computer Science.
                        At the University I've gained important developer skills for low-level languages, web applications, and mobile development.
                        I work as an IT developer. At my job I maintain multiple projects, across different web stacks, bundling web applications, and auditing process logs.
                    </p> */}
                </div>
            
        </div>
    )
});

export default About;