import React, {Component} from 'react';
import '../../../index.css'
import {Col, Row} from "react-bootstrap";

class HeadInfo extends Component {

    render() {
        return (

                <Row>
                <Col xs={"auto"}>
                    <strong>{this.props.name}</strong>
                </Col>
                <Col xs={"auto"}>
                    <div className="text-black-50">@{this.props.name}</div>
                </Col>
                <Col xs={"auto"}>
                    <div className="text-black-50">{this.props.date}</div>
                </Col>
                </Row>

        );
    }
}

export default HeadInfo;