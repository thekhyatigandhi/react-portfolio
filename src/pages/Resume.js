import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

// import LauraCV from ".../pages/laurakamcv-developer.pdf";

export default function Resume() {
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>SKILLS</MDBCardTitle>
          {/* download resume */}

          <a
            href="https://docs.google.com/document/d/1YdJHoDyCnmlmubRMf8nUVF0LAp0u7WxiP10VggYW-Do/export?format=pdf" // Note the 'export' part in the URL to ensure PDF download
            target="_blank"
            download // This will prompt the user to download the PDF
            className="btn btn-primary"
            rel="noreferrer"
          >
            Discover my resume with just a click!
          </a>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBListGroup flush>
          <MDBListGroupItem>
            {/* competencies */}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Front-End
              </span>
              <br />
              HTML | CSS | Javascript | JQuery | Responsive Design | React |
              Boostrap
            </div>
          </MDBListGroupItem>
          <MDBListGroupItem>
            {" "}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Back-End
              </span>{" "}
              <br />
              API | Node | Express | MySQL,Sequelize | MongoDB, Mongoose | REST
              | GraphSQL
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
        {/* <MDBCardFooter>Card footer</MDBCardFooter> */}
      </MDBCard>
    </div>
  );
}
