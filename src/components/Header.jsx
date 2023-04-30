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

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h2>Notes Keeper</h2>
        <div className="">
         <Link to="/login" classNameName="me-5">Login</Link>
         <Link to="/signup">SignUp</Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
