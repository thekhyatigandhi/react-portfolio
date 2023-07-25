import React from "react";

//when click on nav bar items- renders page in between header and footer.

function Nav({ setCurrentPage, currentPage, pages }) {
  return (
    <header>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a
                  aria-current="page"
                  href="#aboutme"
                  //Ternary operator, check to see if current page is About Me.

                  onClick={() => setCurrentPage(pages[0])}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "AboutMe" ? "nav-item active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  //Ternary operator, check to see if current page is portfolio.

                  onClick={() => setCurrentPage(pages[1])}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "Portfolio" ? "nav-item active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  //Ternary operator, check to see if current page is contact.

                  onClick={() => setCurrentPage(pages[2])}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "Contact" ? "nav-item active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  //Ternary operator, check to see if current page is resume.

                  onClick={() => setCurrentPage(pages[3])}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "Resume" ? "nav-item active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Nav;
