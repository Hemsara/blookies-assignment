import React, { useEffect, useState } from "react";
import Heading from "./res/Heading";
import image from "../assets/cover.webp";
import { AiOutlinePlus } from "react-icons/ai";
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="about">
      <Heading text="About Blookies" />
      <div className="content">
        <div className="left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus accusamus repellendus dolor doloremque vero expedita
            iure laborum modi quod ducimus quisquam omnis quo non officia
            ratione officiis eveniet qui minima assumenda cupiditate magni
            exercitationem debitis, blanditiis saepe. Veritatis laudantium,
            voluptates, in, harum excepturi cum sit dolor inventore quibusdam
            eaque dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            eius quod? Vitae placeat autem nihil, sint provident quia
            dignissimos cumque!
          </p>
        </div>
        <div className="right">
          <div className="bg">
            <Target x={55} y={10} left={true} />
            <Target x={35} y={75} left={false} />
            <Target x={5} y={10} left={true} />
            <Target x={80} y={80} left={true} />
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

interface TargetProps {
  x: number;
  y: number;
  left: boolean;
}

const Target: React.FC<TargetProps> = ({ x, y, left }) => {
  const [visible, setVisible] = useState(false);
  function MouseOver(event) {
    setVisible(true);
  }
  function MouseOut(event) {
    setVisible(false);
  }

  return (
    <div
      id="c"
      className="target"
      style={{
        top: `${x}%`,
        left: `${y}%`,
      }}
    >
      <div className="circle" onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <AiOutlinePlus size={25} />
      </div>
      {visible ?? (
        <div
          className="t_content"
          style={{
            left: left ? "140%" : 0,
            right: "150%",
          }}
        >
          <h1>Premium Quality</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, unde?
          </p>
        </div>
      )}
    </div>
  );
};
