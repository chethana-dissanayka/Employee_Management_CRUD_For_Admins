import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link , useParams } from 'react-router-dom';

export default function TableUser() {
    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    //for get all users details to frontend
    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:9090/users");
            setUsers(result.data);
        } catch (error) {
            console.error("Error loading users:", error);
        }
    }
//for delete specific user from database
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:9090/user/${id}`);
        loadUsers();
      };

    return (
        <div className='container'>
            <div className='py-5'>
                <div className="table-responsive">
                    <table className="table table-bordered border-shadow table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">NO.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link> 
                                        <Link className='btn btn-warning mx-2' to={`/edituser/${user.id}`}> Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
