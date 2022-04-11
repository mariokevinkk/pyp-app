import { useNavigate } from "react-router-dom";
import logo from './K Putih.png';
function Navbar(){
    const navigate = useNavigate();
    return(
    <div >  
         <img src={logo} className="image2" alt="freelance"/>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/Order")}>Order</button>
        <button onClick={()=>navigate("/Profile")}>Setting</button>
      
    </div>  
      
        
    );

}
export default Navbar;