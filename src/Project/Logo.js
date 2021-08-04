import React, {Component} from 'react';
import '../index.css'
import {Col, Row} from "react-bootstrap";

class Logo extends Component {
    render() {
        return (

                <Row>
                <Col xs={"auto"}>
                    <strong>The Practical Dev</strong>
                </Col>
                <Col xs={"auto"}>
                    <div className="text-black-50">@ThePracticalDev</div>
                </Col>
                <Col xs={"auto"}>
                    <div className="text-black-50">Sep 10</div>
                </Col>
                </Row>

        );
    }
}

export default Logo;