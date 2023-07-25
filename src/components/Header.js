import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    // <!-- Background image --> */}
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://unsplash.com/photos/zFOm6KzA-7g")`,
          height: "290px",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6);" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Khyati Gandhi</h1>
              <h4 className="mb-3">From Idea to Interface! </h4>

              <a
                className="btn btn-outline-light btn-lg"
                href="http://localhost:3000/#contact"
                role="button"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
