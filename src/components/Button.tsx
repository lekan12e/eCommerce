import React from "react";
import "./button.css";

type ButtonProps = {
  name: string;
  style: "button" | "white-button";
};

const Button: React.FC<ButtonProps> = ({ name, style }) => {
  return <div className={`${style}`}>{name}</div>;
};

export default Button;
