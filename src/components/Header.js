import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleClickDashboard = () => {
        console.log("clicked");
       navigate('/');
    }  
    const handleClick = () => {
        console.log("clicked");
       navigate('/heroes');
    }
  return (
    <div>
      <h1>Tour of Heroes</h1>
      {/* <button onClick={handleClickDashboard}>Dashboard</button>
      <button onClick={handleClick} >Heroes</button> */}
      
          <Link className="linkToBtn" to="/">Dashboard</Link>
        
          <Link className="linkToBtn" to="/heroes">Heroes</Link>
        
    </div>
  );
};

export default Header;
