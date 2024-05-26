import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/signin';
import UMpage from './pages/UMpage';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/umpage" element={<UMpage/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/edituser/:id" element={<EditUser/>}/>
          <Route path="/viewuser/:id" element={<ViewUser/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
