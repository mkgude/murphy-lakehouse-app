import React from 'react'

export default function Amenities() {
    return (
        <div className="amenities">
            <h2>Amenities</h2>
            <hr/>
            <div className="amenities-info">
                <div className="amenities-section amenities-house">
                    <h3>Main House and Cottages</h3>
                    <h4>Main Level</h4>
                    <ul>
                        <li>Kitchen/Family Room on main level</li>
                        <li>Walk out deck overseeing the lake</li>
                        <li>Laundry room w 2 Washers and Dryers</li>
                        <li>Linens provided</li>
                        <li>Wifi</li>
                    </ul>
                    <h4>Lower Level</h4>
                    <ul>
                        <li>Main Kitchen with ice maker, 2 refrigerators, 2 stovetop ovens, a microwave, coffee maker, and toaster</li>
                        <li>Main Gathering, Dining and Entertainment Room with sectional and access to covered Walkout Deck overseeing the lake</li>
                        <li>Wash Room on Lower Level</li>
                        <li>Wifi</li>
                    </ul>
                    <h4>Cottages</h4>
                    <ul>
                        <li>Kitchenette with mini refrigerator</li>
                        <li>Couch and dining table</li>
                        <li>Private deck overlooking the lake</li>
                        <li>Linens provided</li>
                    </ul>
                </div>
                <div className="amenities-section amenities-general"> 
                    <h3>Other amenities</h3>  
                    <h4>General</h4>
                    <ul>
                        <li> Gas and/or Charcoal Grills available </li>
                        <li>
                        Fire Pits
                        </li>
                        <li>Outdoor games (horse-shoes, etc.)</li>
                    </ul>
                    <h4>Dock</h4>
                    <ul>
                        <li>Large private dock with open boat slips</li>
                        <li>Canoes and paddles</li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}
