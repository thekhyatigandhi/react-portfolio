import React from "react";

export default function Footer() {
  return (
    //icons containing links to social media etc
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1;" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/khyati.gandhi/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/TheKhyatiGandhi"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.google.com/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/thekhyatigandhi/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/thekhyatigandhi/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/thekhyatigandhi/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Khyati Gandhi
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}
