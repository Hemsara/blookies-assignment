import React from "react";
import Heading from "./res/Heading";

interface AboutProps {
    
}
 
const About: React.FC<AboutProps> = () => {
    return ( <section className="about">
        <Heading text="About Blookies"/>
    </section> );
}
 
export default About;