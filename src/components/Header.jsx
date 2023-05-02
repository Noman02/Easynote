// const navLinks = [
//     {
//       id: "login",
//       title: "Login",
//     },
//     {
//       id: "signup",
//       title: "SignUp",
//     },
// ]

import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between">
        <Link className="heading" to="/">
          <h3>Easynote</h3>
        </Link>
        <div className="">
          {user?.uid ? (
            <Link className="link" onClick={handleLogOut}>
              Logout
            </Link>
          ) : (
            <>
              <Link className="link" to="/login" classNameName="me-5">
                Login
              </Link>
              <Link className="link" to="/signup">
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
