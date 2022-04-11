
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Appbar from "../components/Appbar";
import Cardd from "../components/Cardd";

import Content from "../components/Content";
import Footer from "../components/Footer";
import Kategori from "../components/Kategori";
import Navbar from "../components/Navbar";
import freelance from './freelance.jpg';
import logo from './K Putih.png';

function Home() {
  
  return (
    <div className="App">
       

        <Navbar />
        <h1 className="jud">KAMPUNG FREELANCE</h1>
        <img src={freelance} className="image" alt="freelance"/>
        <Appbar />
        <h3>Find the perfect freelance services for your business!</h3>
        <input type="text" placeholder="Find Services.."/>
        <Cardd/>
     {/* <Appbar />
      <Content nama="Pagi" />
      
      <Footer />  */}
    
    </div>
  );
}

export default Home;
