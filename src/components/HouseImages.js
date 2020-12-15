import React from "react"
// import {useState} from "react"
// import Carousel from "react-bootstrap/Carousel";
// import lakeOne from "../images/cabinview.jpg";
// import lakeTwo from "../images/roadview.jpg";
// import lakeThree from "../images/viewfromlakeone.jpg";
// import lakeFour from "../images/viewfromlaketwo.jpg";
import lakeFive from "../images/cottages-1.png";
import lakeSix from "../images/house-1.png";
import lakeSeven from "../images/house-2.png";


export default function HouseImages() {
    
    return (
        <div className="lake-photos">
            <img className="property-images" src={lakeFive} alt="a cottage view"/>
            <img className="property-images" src={lakeSix} alt="a house view"/>
            <img className="property-images" src={lakeSeven} alt="a house view"/>
        </div>
    )
}
