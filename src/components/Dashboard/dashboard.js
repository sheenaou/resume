import React from "react";
import './dashboard.css'
import EducationTile from "./Tiles/education";
import LocationTile from "./Tiles/location";
import HobbiesTile from "./Tiles/hobbies";
import ConnectTile from "./Tiles/connect";
import {Col, Row} from "antd";
import 'antd/dist/antd.css';

function Dashboard () {
    return (
        <div className="container">
            <Row>
                <div className="heading">Sheena Ou</div>
            </Row>
            <Row>
                <Col>
                    <EducationTile />
                </Col>
                <Col>
                    <LocationTile />
                </Col>
                <Col>
                    <HobbiesTile />
                </Col>
            </Row>
            <ConnectTile />
        </div>
    )
}

export default Dashboard
