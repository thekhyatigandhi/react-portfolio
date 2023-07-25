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
          <MDBCardTitle>Competencies</MDBCardTitle>
          {/* download resume */}
          <a
            href="https://docs.google.com/document/d/1YdJHoDyCnmlmubRMf8nUVF0LAp0u7WxiP10VggYW-Do/edit?usp=sharing"
            target={"_blank"}
            download
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
              HTML <br />
              CSS <br />
              Javascript <br />
              JQuery <br />
              Responsive Design <br />
              React <br />
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
              API <br />
              Node <br />
              Express <br />
              MySQL,Sequelize <br />
              MongoDB, Mongoose <br />
              REST <br />
              GraphSQL
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
        {/* <MDBCardFooter>Card footer</MDBCardFooter> */}
      </MDBCard>
    </div>
  );
}
