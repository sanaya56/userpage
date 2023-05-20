import React from "react";
import '../UserPage.css';
import logo from './gdsc.jpg';
import star from './star.png'

const UserPage=()=>{
    return(
<div>
    <div className="left">
    <img src={logo} className="img"></img>
    <h className="h1">Mr. Lorem ipsum</h>
    <p className="p1">Designation</p>
    <div className="starimg">
    <img src={star} className="img1"></img>
    <img src={star} className="img1"></img>
    <img src={star} className="img1"></img>
    <img src={star} className="img1"></img>
    </div>
    <div className="achive">
        <h1>Achivements</h1>
        <div className="list">
        <ul>
            <li className="item">Achievement1</li>
            <li className="item">Achievement2</li>
            <li className="item">Achievement3</li>
            <li className="item">Achievement4</li>
            <li className="item">Achievement5</li>
            <li className="item">Achievement6</li>
            <li className="item">Achievement7</li>
        </ul>
        </div>


    </div>
    
    

</div>
   <div className="middle">
    <p className="p">Progress Graph</p>
    <div className="graph">
        <div className="graph2">
           
        </div>
        <div className="graph3"></div>
    </div>
   </div>
    
    <div className="right">

    </div>
        
</div>
    
    )
};
export default UserPage;
