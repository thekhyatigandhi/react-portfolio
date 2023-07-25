import React from "react";
import "../pages";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

// profile picture and about me
import ProfilePic from "../assets/ProfilePhoto.jpg";

export default function AboutMe() {
  return (
    <div>
      <div>
        <div className="aboutMe aboutMeContainer">
          <img
            src={ProfilePic}
            className="profile-picture"
            alt="profile"
            style={{
              paddingTop: "35px",
            }}
          />
          <p
            className="aboutMe text"
            style={{
              paddingTop: "35px",
              fontSize: "20px",
            }}
          >
            Hey, I am Khyati Gandhi and this is the place you translate your
            ideas to interface.
            <br />
            Connect with me on khyati296@gmail.com
            <br />
            <span>
              <a href="https://github.com/thekhyatigandhi">GitHub {"   "} </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/thekhyatigandhi/">
                LinkedIn {"   "}
              </a>
            </span>
            <span>
              <a href="https://docs.google.com/document/d/1rRwcce0x2eJ5bEQvzju_UDGhgpssTbBnhufhibWEHW0/edit?usp=sharing">
                Resume{"   "}
              </a>
            </span>
            {/* <p
          style={{
            fontSize: "15px",
          }}
        >
          Competencies: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
          <br /> MySQL, MongoDB, GitHub, Express, React.js <br /> Node.js,
          Handlebars, JQuery, Bootstrap MUI- Material Design <br /> CSS
          Framework, Client-Side and 3rd Party APIs.
        </p> */}
            <br />
          </p>
        </div>
        <MDBCard
          alignment="center"
          className="myBackgroundcard w-auto p-3 text-start"
        >
          <MDBCardBody style={{ backgroundColor: "#F2FCFA" }}>
            <MDBCardTitle>BACKGROUND</MDBCardTitle>
            <MDBCardText className="myBackgroundText">
              Khyati Gandhi is an accomplished web developer, designer, and
              coder based in Toronto, Canada. With a keen eye for design and a
              passion for creating elegant and user-friendly applications,
              Khyati is all set to be a leading figure in the development
              community.
              <br /> <br />
              She has persude her studies at the prestigious University of
              Toronto, and is committed to staying on the cutting edge of the
              latest technological advancements and applying her knowledge to
              the projects she works on. She possesses a deep understanding of
              the intricacies of web development, including front-end and
              back-end technologies, and is proficient in a variety of
              programming languages. <br /> <br />
              Khyati's passion for web development is evident in every aspect of
              her work, and she is dedicated to using her skills to make a
              positive impact on the world. Whether developing innovative new
              applications or contributing to existing projects, Khyati is
              committed to making the web a better, more beautiful, and more
              functional place.
            </MDBCardText>
            <MDBBtn href="#portfolio">My Apps</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter className="text-muted"></MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
}
