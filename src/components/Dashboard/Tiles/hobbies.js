import React from "react";
import './../dashboard.css'
import climbing from './../../../assets/climbing.jpg'

function HobbiesTile () {
    return (
        <div className="tile" style={{
            backgroundImage: `url(${climbing})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="title">
                Rock Climber
            </div>
        </div>
    )
}

export default HobbiesTile

