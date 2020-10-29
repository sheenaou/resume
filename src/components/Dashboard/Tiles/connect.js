import React from "react";
import './../dashboard.css'
import { FiLinkedin } from "react-icons/all";

function ConnectTile () {
    return (
        <div className="tile" style={{backgroundColor: '#563f46', color: 'white'}}>
            <div className="column">
                <FiLinkedin className="heading" style={{color: 'white'}} />
                <div>Connect with me </div>
            </div>
        </div>
    )
}

export default ConnectTile
