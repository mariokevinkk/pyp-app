
import { useNavigate } from 'react-router-dom';
import profile from './profile.jpeg';
function Profile2(){
    const navigate = useNavigate();
    return(
    <div className='profil'>  
       <img src={profile} className="image3" alt="freelance"/>
       <ul className='nama'>
        <h1 className='padding20'>Mario Kevin K</h1>
        <button className='pkiri' onClick={()=>navigate("/edit")}>Edit</button>
        </ul>
    </div>  
      
        
    );

}
export default Profile2;