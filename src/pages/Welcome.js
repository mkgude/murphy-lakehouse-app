import React from "react"
import Accomodations from "../components/Accomodations"
import Amenities from "../components/Amenities"
import Departure from "../components/Departure"
import Directions from "../components/Directions"
import Town from "../components/Town"
import LakeBackground from "../images/table-rock2.jpg"
import LakeBackground2 from "../images/Table-Rock-MO-wanderthemap.jpg"

function Welcome() {
    return (
        <div>
            <div className="mc-header" style={{ backgroundImage:`url(${LakeBackground})`, backgroundRepeat: "no-repeat" }}>
                <h1 className="mc-welcome">Murphy Cottages</h1>
                <p className="mc-welcome-text">Welcome! This page contains all the information you need to start your planning, during your stay, and for your departure from the property. We hope you enjoy your time at Murphy Cottages!</p>
                <nav className="mc-nav">
                    <a href="#accomodations" className="mc-links">Accomodations</a>
                    <a href="#amenities" className="mc-links">Amenities</a>
                    <a href="#town" className="mc-links">In Town</a>
                    <a href="#directions" className="mc-links">Directions</a>
                    <a href="#departure" className="mc-links">Departure</a>
                    <a href="#contact" className="mc-links">Contact</a>
                </nav>
            </div>
            
            <div id="accomodations">
                <Accomodations />
            </div>
            <div id="amenities">
                <Amenities />
            </div>
            <div id="town">
                <Town />
            </div>
            <div id="directions">
                <Directions />
            </div>
            <div id="departure">
                <Departure/>
            </div>
            <div id="contact">
                <p>Theresa’s cell (913) 406-5246</p>
                <p>Mike’s cell (913) 269-5906</p>
            </div>
        </div>
    )
}
export default Welcome
