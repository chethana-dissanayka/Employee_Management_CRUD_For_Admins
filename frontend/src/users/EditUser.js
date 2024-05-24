import axios from "axios";
import React, { useState , useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import INavbar from "../layout/internalnavbar";

export default function EditUser() {
  let navigate = useNavigate();

  const {id}= useParams();
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


  useEffect(() => {
    loadUsers();
}, []);


  //when click submit button should called the onsubmit function
  //here onsubmit event used in form component
  const onSubmit = async (e) => {
    //without anything it not submit
    e.preventDefault();
    await axios.put(`http://localhost:9090/user/${id}`, user);
    navigate("/umpage");
  };

  const loadUsers = async () => {
    try {
        const result = await axios.get(`http://localhost:9090/user/${id}`);
        setUser(result.data);
    } catch (error) {
        console.error("Error loading users:", error);
    }
}

  return (
    <div >
     <INavbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5  shadow">
          <h2 className="text-center m-4">Edit User</h2>

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
            <div style={{marginBottom:"20px"}}>
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
    </div>
  );
}
