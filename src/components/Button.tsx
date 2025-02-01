import React from "react";
import "./button.css";

type ButtonProps = {
  name: string;
  style: "button" | "white-button";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ name, style, className }) => {
  return <div className={`${className} ${style}`}>{name}</div>;
};

export default Button;
