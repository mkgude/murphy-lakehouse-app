import React from "react"
import lakeEight from "../images/map-of-tablerock copy.webp";
import lakeNine from "../images/silver-dollar-city.jpeg";
import lakeTen from "../images/boat-rental.jpg";
import lakeEleven from "../images/branson.jpeg";
import lakeTwelve from "../images/bigcedarlodge.jpeg";
import lakeThirteen from "../images/tablerock-golf.jpg";


export default function AdditionalImages() {
    
    return (
        <div className="lake-photos">
            <figure className="lake-activity-link">
                <img className="addtl-images" src={lakeEight} alt="map of lake"/>
                <figcaption><a href="https://www.visittablerocklake.com/" >Visit the official Table Rock Lake webpage</a></figcaption>
            </figure>
            <figure className="lake-activity-link">
                <img className="addtl-images" src={lakeNine} alt="silver dollar city"/>
                <figcaption><a href="https://www.silverdollarcity.com/">Visit the official Silver Dollar City webpage</a></figcaption>
            </figure>
            <figure className="lake-activity-link">
                <img className="addtl-images" src={lakeTen} alt="marina"/>
                <figcaption><a href="https://portofkimberling.com/">Visit the Port of Kimberling website for boat rental information</a></figcaption>
            </figure>
            <figure className="lake-activity-link">
                <img className="addtl-images" src={lakeEleven} alt="Branson, Missouri"/>
                <figcaption><a href="https://www.explorebranson.com/">Visit the official Branson, MO webpage</a></figcaption>
            </figure>
            <figure className="lake-activity-link">
                <img className="addtl-images" src={lakeTwelve} alt="Big Cedar Lodge"/>
                <figcaption><a href="https://bigcedar.com/">Visit the Big Cedar Lodge webpage</a></figcaption>
            </figure>
            <figure className="lake-activity-link">
                <img className="addtl-images" src={lakeThirteen} alt="Table Rock Gold Course"/>
                <figcaption><a href="https://www.explorebranson.com/golf">Click to find a list of great golf in the area</a></figcaption>
            </figure>
        </div>
    )
}
