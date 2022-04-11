
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Profile2 from "../components/Profile2";
import Setting from "../components/Setting";
import { Card, Button } from "react-bootstrap";



function Profile() {

  return (
    <div className="App">
        <Navbar/>
        <Profile2/>
        <Setting/>
 
        <Button variant="outline-secondary">Log out</Button>{' '}
    </div>
  );
  }
  export default Profile;