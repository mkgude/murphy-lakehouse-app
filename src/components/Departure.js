import React from 'react'

export default function Departure() {
    return (
        <div className="departure">
            <h2>Departure</h2>
            <hr/>
            <div className="departure-info">
                <div className="depart-section depart-mainhouse">
                    <h3 className="depart-head">House</h3>
                    <ul>
                        <li>Remove bed linens and towels and put in the provided and designated laundry bags and take to the lower office area and leave on the floor</li>
                        <li>Leave quilts, bed pads, comforters and pillow shams on the beds</li>
                        <li>Empty all trash cans and take all garbage to the dumpster. The dumpster is located at the top of the gravel road and in a gravel drive across the road. It says private dumpster on it. It is not locked during the summer season.</li>
                        <li>Remove everything from the refrigerator</li>
                        <li>Leave all dishes clean and put away</li>
                        <li>If you use the grill, please clean after use and shut off the propane. The propane is the guest responsibility.</li>
                        <li>Leave the house temperature set at 75 when you leave</li>
                    </ul>
                </div> 
                <div className="depart-section depart-other">  
                    <h3 className="depart-head" >Cottages</h3>
                    <ul>
                        <li>Shut off air conditioning in the cottages and leave at a higher temperature during your stay when not in the cottage</li>
                        <li>Remove bed linens and towels and put the provided laundry bags and leave them in the lower office area of the house to be laundered</li>
                        <li>Remove everything from the mini-refrigerators</li>
                        <li>Empty all trash cans and dispose of with the house trash</li>
                    </ul>
                    <h3 className="depart-head">Dock</h3>
                    <ul>
                        <li>Secure the furniture on the dock</li>
                        <li>Raise the swim ladder and secure to keep clean and out of the water</li>
                        <li>Store and secure the canoes</li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}
