
import React from 'react';
import { Link } from 'react-router-dom';
// home, explore, login buttons
import '../styles/navbar.css';


const Nav = (props) => {
    return(
      <div className="outer-div-nav-bar">
        <div className="home-button" onClick={()=>props.history.push("/")}>
          
        </div>
        <button className="explore-button" onClick={()=>props.history.push("/topics")}>
          Explore
        </button>
      </div>
    );
};





export default Nav;
