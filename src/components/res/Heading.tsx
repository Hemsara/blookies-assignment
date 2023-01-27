import React from "react";

const Heading: React.FC<Props> = ({ text }) => {
  return <h1 className="styled_heading"> {text}</h1>;
};

interface Props {
  text: string;
}
export default Heading;


