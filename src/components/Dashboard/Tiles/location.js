import React from "react";
import './../dashboard.css'
import { FiMapPin} from "react-icons/all";

function LocationTile () {
    return (
        <div className="tile">
            <div className="column">
                <FiMapPin className="heading"/>
                <div>
                    <div>
                        Currently residing in Ottawa, Ontario, Canada
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationTile
