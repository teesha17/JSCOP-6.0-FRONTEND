import React, { useState, useEffect } from "react";
import "./SideNavbar.css";
import { Link, useParams } from "react-router-dom";

const Sidenav = () => {
  const [sidenavWidth, setSidenavWidth] = useState("0vw");
  const [sidenavItems, setSidenavItems] = useState([
    { name: "Home", path: "/" },
    { name: "About", path: "aboutus" },
    { name: "Events", path: "events" },
    { name: "Timeline", path: "timeline" },
    { name: "Web Team", path: "webteam" },
    { name: "Gallery", path: "gallery" },
    { name: "Contact Us", path: "contactus" },
  ]);

  var currentURL = window.location.href;
  currentURL = currentURL.split("/");
  currentURL = currentURL[currentURL.length - 2];

  const openNav = () => {
    setSidenavWidth("100vw");
  };

  const closeNav = () => {
    setSidenavWidth("0vw");
  };
  return (
    <div className="sidenavvbar">
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: `${sidenavWidth}` }}
      >
        <Link href="" className="closebtn" onClick={closeNav}>
          &times;
        </Link>

        <hr style={{ color: "white" }} />
        {sidenavItems.map((item, index) => {
          return (
            <div className="sidenavbarsections" key={index}>
              <a
                className="sidelink nav-link"
                href={`#${item.path}`}
                onClick={closeNav}
              >
                {item.name}
              </a>
              {/* <hr style={{ color: "white" }} /> */}
            </div>
          );
        })}
      </div>

      <span
        style={{
          fontSize: "30px",
          cursor: "pointer",
          padding: "7px",
          color: "var(--lighter)",
        }}
        onClick={openNav}
      >
        &#9776;
      </span>
    </div>
  );
};

export default Sidenav;
