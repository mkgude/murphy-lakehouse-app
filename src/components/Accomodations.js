import React from 'react'

export default function Accomodations() {
    return (
        <div className="accomodations">
            <h2>Accomodations Section</h2>
            <hr/>
            <div className="accomodations-info">
                <div className="accomo-section accomo-main-house">
                    <h3>Main House</h3>
                    <h4>Main Floor</h4>
                    <ul>
                        <li>Master - King Bed and ¾ Bath</li>
                        <li>Bedroom 1 – Queen Bed and shared full bath</li>
                        <li>Bedroom 2 – 2 Twin Beds and shared full bath</li>
                    </ul>
                    <h4>Loft</h4>
                    <ul>
                        <li>Loft Bedroom – 2 Full Beds and shared full bath</li>
                        <li>Loft - 4 Twin Beds and shared full bath</li>
                    </ul>
                    <h4>Lower Walkout/Gathering Room</h4>
                    <ul>
                        <li>Sectional w Queen Pullout mattress</li>
                    </ul>
                </div>
                
                <div className="accomo-section accomo-cottages">
                    <h3>Cottages</h3>
                    <h4>Cottage 1</h4>
                    <ul>
                        <li>King Bed</li>
                        <li>Addtional Day Bed with Pullout Air Mattress</li>
                        <li>3/4 Bath</li>
                    </ul>
                    <h4>Cottage 2</h4>
                    <ul>
                        <li>King Bed</li>
                        <li>Additional Twin bed</li>
                        <li>3/4 Bath</li>
                    </ul>
                    <h4> Cottages 3-5</h4>
                    <ul>
                        <li>King Bed</li>
                        <li>3/4 Bath</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
