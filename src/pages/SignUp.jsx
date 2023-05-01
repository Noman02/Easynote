import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { doc,setDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthProvider";
import { db } from "../Firebase/firebase-config";
const SignUp = () => {
  const {createUser}=useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const handleSubmit = (e) => {
  e.preventDefault();

    createUser( email, password)
      .then(async(userCred) => {
        await setDoc(doc(db, "users", userCred.user.uid), {email});

        console.log(userCred.user);
        setEmail("");
        setPassword("");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.log("signup error", error);
      });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                      <label className="form-label">Your Email</label>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <label className="form-label">Password</label>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="id"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button className="btn btn-primary btn-lg">
                          Signup
                        </button>
                      </div>
                      <span>
                        Already have an account? <Link to="/login">Login</Link>
                      </span>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
