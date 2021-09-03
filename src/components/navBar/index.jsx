import React from "react";
import TrevoLogoSvg from "svgs/trevoLogo.svg";
import NavBarStyle from "./navBar.style";

const NavBar = () => (
  <NavBarStyle>
    <nav>
      <div className="container">
        <div className="logo">
          <figure>
            <TrevoLogoSvg />
          </figure>
          <p>TREVO <span>GUARD</span></p>
        </div>
      </div>
    </nav>
  </NavBarStyle>
)

export default NavBar;
