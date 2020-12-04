import React from 'react'
import Accomodations from '../components/Accomodations'
import Amenities from '../components/Amenities'
import Departure from '../components/Departure'
import Directions from '../components/Directions'
import Town from '../components/Town'

function Welcome() {
    return (
        <div>
            <div className="mc-header">
            <h1 className="mc-welcome">Welcome to murphy cottages!</h1>
            <p className="mc-welcome-text">Use the links below to find all the information you need to know from pre-planning to departure. If you have any questions, please see the contact information below.</p>
            <a href="#accomodations" className="mc-links">Accomodations</a>
            <a href="#amenities" className="mc-links">Amenities</a>
            <a href="#town" className="mc-links">In Town</a>
            <a href="#directions" className="mc-links">Directions</a>
            <a href="#departure" className="mc-links">Departure</a>
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
           
        </div>
    )
}
export default Welcome
