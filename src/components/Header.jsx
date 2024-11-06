import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseGlobal from "../hooks/UseGlobal";
import { signOut } from "../config/firebase";
import UserContext from "../UserContext";
import { auth } from "../config/firebase";

const Header = ({ path }) => {
  const [Toggle, setToggle] = useState("");

  const { user, setUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out user using Firebase
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  useEffect(() => {
    console.log("Current User:", user); // Add this line to check user state
  }, [user]);

  const isAdmin = user && user.uid === "80A0kqpyKZXh3iScNqVWxijH2Do1";

  return (
    <header>
      <div class="logo-container">
        <Link to="/">
          <img src="assets/raman.jpg" class="logo" />
        </Link>
        <Link to="/">
          <div class="logo-text">
            <h1 class="logo-header">Nanak Raj Chaleya </h1>
            <p class="logo-p">FOUNDATION</p>
          </div>
        </Link>
      </div>

      <div class="ham-btn">
        {Toggle == "active" ? (
          <i
            class="fa fa-times"
            onClick={() => {
              setToggle("");
            }}
          ></i>
        ) : (
          <i
            class="fa fa-solid fa-bars"
            onClick={() => {
              setToggle("active");
            }}
          ></i>
        )}
      </div>
      <div
        class={"header-links " + Toggle}
        onClick={() => {
          setToggle("");
        }}
      >
        <ul className="scroll-auto">
          <Link to="/" className="w-[100%] lg:w-auto" style={{ margin: "5px" }}>
            <li>
              <a
                href="#"
                style={{
                  color: path == "/" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)",
                }}
              >
                Home
              </a>
            </li>
          </Link>
          <Link
            to="/about"
            className="w-[100%] lg:w-auto"
            style={{ margin: "5px" }}
          >
            <li>
              <a
                href="#"
                style={{
                  color:
                    path == "/about" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)",
                }}
              >
                About
              </a>
            </li>
          </Link>
          <Link
            to="/causes"
            className="w-[100%] lg:w-auto"
            style={{ margin: "5px" }}
          >
            <li>
              <a
                href="#"
                style={{
                  color:
                    path == "/causes" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)",
                }}
              >
                Causes
              </a>
            </li>
          </Link>
          <Link
            to="/events"
            className="w-[100%] lg:w-auto"
            style={{ margin: "5px" }}
          >
            <li>
              <a
                href="#"
                style={{
                  color:
                    path == "/events" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)",
                }}
              >
                Event
              </a>
            </li>
          </Link>
          <Link
            to="/news"
            className="w-[100%] lg:w-auto"
            style={{ margin: "5px" }}
          >
            <li>
              <a
                href="#"
                style={{
                  color:
                    path == "/news" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)",
                }}
              >
                News
              </a>
            </li>
          </Link>
          <Link
            to="/contact"
            className="w-[100%] lg:w-auto"
            style={{ margin: "5px" }}
          >
            <li>
              <a
                href="#"
                style={{
                  color:
                    path == "/contact" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)",
                }}
              >
                Contact
              </a>
            </li>
          </Link>
          <Link
            to="/GALLERY"
            className="w-[100%] lg:w-auto"
            style={{ margin: "5px" }}
          >
            <li>
              <a
                href="#"
                style={{
                  color:
                    path == "/contact" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)",
                }}
              >
                Gallery
              </a>
            </li>
          </Link>
          {/* <Link to="/userlist" className="w-[100%] lg:w-auto"style={{margin:"5px"}}>
            <li>
              <a href="#" style={{ color: path == "/contact" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)" }}>
               Admin
              </a>
            </li>
          </Link> */}

          {isAdmin && (
            <Link
              to="/userlist"
              className="w-[100%] lg:w-auto"
              style={{ margin: "5px" }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color:
                      path === "/contact"
                        ? "rgb(241, 126, 38)"
                        : "rgb(4, 4, 54)",
                  }}
                >
                  Admin
                </a>
              </li>
            </Link>
          )}

          {user ? (
            <li onClick={handleSignOut}>
              <a href="#" style={{ color: "rgb(4, 4, 54)" }}>
                {user.displayName ? `Sign out` : "Sign out"}
              </a>
            </li>
          ) : (
            <Link to="/login" className="w-[100%] lg:w-auto">
              <li>
                <a
                  href="#"
                  style={{
                    color:
                      path === "/login" ? "rgb(241, 126, 38)" : "rgb(4, 4, 54)",
                  }}
                >
                  <i className="fa fa-user" aria-hidden="true"></i> Sign in
                </a>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
