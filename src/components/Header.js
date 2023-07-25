import React from "react";
import { Link } from "react-router";
import backgroundImage from "../assets/headerImg.png";
export default function Header() {
  return (
    // <!-- Background image --> */}
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "290px",
        }}
      ></div>
    </header>
  );
}
