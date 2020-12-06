import React from 'react'

export default function Directions() {
    return (
        <div className="directions">
            <h2>Directions Section</h2>
            <hr/>
            <div className="directions-info">
                <div className="directions-section address">
                    <h3>Address</h3>
                    <p>                
                    Murphy Cottages
                    445 House on the Rock Road
                    Reeds Spring, MO 65737
                    </p>
                </div>
                <div className="directions-section dir-kc-lake">
                    <h4>Directions from Kansas City</h4>
                    <ul>
                        <li>Take 435 E to 71 S to Hwy 7 south towards Clinton</li>
                        <li>In Clinton take Hwy 13 S to Springfield</li>
                        <li>In Springfield take 44 E to 65 South toward Branson (4.5 miles)</li>
                    </ul>
                    <p>From here you can choose a quick route or scenic route, see options below.</p>
                    <h5>Fastest and most direct route directions</h5>
                    <ul>
                        <li>Once you reach 65 south go (approx. 21 miles) and exit right on EE, go for 3 miles until you reach Hwy 13 south, take a left on 13 South</li>
                        <li>At Hwy 13 and OO Road stop light (approx. 22 miles) and turn Right on OO Road (after the Shell gas station)</li>
                        <li>Go 2.2 miles and turn right on House on the Rock Road, stay left at Aunt Hill Lane onto gravel road then stay to the right where you will see a chain link gate at the entrance and ends at the house and cottages</li>
                    </ul>
                    <h5>Scenic Route Directions</h5>
                    <ul>
                        <li>
                        Take 65 South to 465 the Ozark Mountain Highroad (also the Silver Dollar City exit) and go right towards Silver Dollar City and Branson West  
                        </li>
                        <li>Go left on Hwy 13 & 76 intersection at a stoplight</li>
                        <li>Go 3.8 miles to OO Road and take a right after the Shell Station</li>
                        <li>Go 2.2 miles turn Right on House on the Rocks Road</li>
                        <li>Stay left at Aunt Hill Lane, then right onto the gravel road with a chain link gate at the entrance and ends at the house and cottages</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
