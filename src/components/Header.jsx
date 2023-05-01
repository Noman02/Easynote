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

const Header = () => {
  const {logOut,user}=useContext(AuthContext)
  console.log(user)
  const handleLogOut=()=>{
    logOut().then(()=>{}).catch((error)=>console.log(error))
  }
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <Link to="/"><h2>Notes Keeper</h2></Link> 
        <div className="">
         <Link to="/login" classNameName="me-5">Login</Link>
         <Link to="/signup">SignUp</Link>
         <Link onClick={handleLogOut}>Logout</Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
