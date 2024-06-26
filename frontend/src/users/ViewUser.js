import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import INavbar from "../component/internalnavbar";
import Footer from "../component/footer";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9090/user/${id}`);
    setUser(result.data);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <INavbar/>
    <div className="container" style={{ flex: 1 }} >
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow " style={{  backgroundColor:"#7ebab8",}}>
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              {/* Details of user id : {user.id} */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>UserName:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/umpage"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
