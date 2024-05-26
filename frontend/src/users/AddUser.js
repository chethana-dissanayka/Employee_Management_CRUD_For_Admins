import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import INavbar from "../component/internalnavbar";
import Footer from "../component/footer";

export default function AddUser() {
  let navigate = useNavigate();
  // create object to store new user data
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  // user data
  const { name, username, email } = user;

  //changed values
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //when click submit button should called the onsubmit function
  //here onsubmit event used in form component
  const onSubmit = async (e) => {
    //without anything it not submit
    e.preventDefault();
    await axios.post("http://localhost:9090/user", user);
    navigate("/umpage");
  };

  return (
    <div  style={{ overflow:"hidden", display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <INavbar />
      <div style={{
        backgroundImage: "url('./bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow:"hidden",
        margin: "0",
        padding: "0",
        flex:"1"
        
      }}>
        <div className="row"   >
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-5  shadow" style={{
            backgroundColor: "#caeda3"
          
          }}>
            <h2 className="text-center m-4">New Employee Registration</h2>

            <form onSubmit={(e) => onSubmit(e)}>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  // get value from enterd
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  //get value of entered
                  value={username}
                  //input changed then value changed
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="email"
                  //get value from entered
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
                <Link className="btn btn-outline-danger mx-2 " to="/umpage">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
