import React from "react"
import Accomodations from "../components/Accomodations"
import Amenities from "../components/Amenities"
import Departure from "../components/Departure"
import Directions from "../components/Directions"
import Town from "../components/Town"
import LakeBackground from "../images/table-rock2.jpg"
import HouseImages from "../components/HouseImages"
import AdditionalImages from "../components/AdditionalImages"

function Welcome() {
    return (
        <div>
            <div className="mc-header" style={{ backgroundImage:`url(${LakeBackground})`, backgroundRepeat: "no-repeat"}}>
                <h1 className="mc-welcome">Murphy Cottages</h1>
                <p className="mc-welcome-text">Welcome! This page contains all the information you need to start your planning, during your stay, and for your departure from the property. We hope you enjoy your time at Murphy Cottages!</p>
                <hr />
                <nav className="mc-nav">
                    <a href="#accomodations" className="mc-links">Accomodations</a>
                    <a href="#amenities" className="mc-links">Amenities</a>
                    <a href="#town" className="mc-links">In Town</a>
                    <a href="#directions" className="mc-links">Directions</a>
                    <a href="#departure" className="mc-links">Departure</a>
                    <a href="#contact" className="mc-links">Contact</a>
                </nav>
            </div>
            <div className="content">
                <div id="lake-photos">
                    <HouseImages/>
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
                <div id="addtl-images">
                    <AdditionalImages  />
                </div>
                <div id="directions">
                    <Directions />
                </div>
                <div id="departure">
                    <Departure/>
                </div>
                <div id="contact">
                    <h4>Contact</h4>
                    <p className="contact-info">445 House on the Rock Road, Reeds Spring, MO | cell | email</p>
                    {/* <p>Theresa’s cell (913) 406-5246</p>
                    <p>Mike’s cell (913) 269-5906</p> */}
                </div>
            </div>
        </div>
    )
}
export default Welcome
