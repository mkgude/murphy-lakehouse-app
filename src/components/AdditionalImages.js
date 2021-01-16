import React from "react"
import lakeEight from "../images/map-of-tablerock copy.webp";
import lakeNine from "../images/silver-dollar-city.jpeg";


export default function AdditionalImages() {
    
    return (
        <div className="lake-photos">
            <figure class="lake-activity-link">
            <img className="addtl-images" src={lakeEight} alt="map of lake"/>
            <figcaption><a href="https://www.visittablerocklake.com/" >Visit the official Table Rock Lake webpage</a></figcaption>
            </figure>
            <figure class="lake-activity-link">
            <img className="addtl-images" src={lakeNine} alt="silver dollar city"/>
            <figcaption><a href="https://www.silverdollarcity.com/">Visit the official Silver Dollar City webpage</a></figcaption>
            </figure>
        </div>
    )
}
