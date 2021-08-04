import React, {Component} from 'react';
import Logo from "./Logo"
import "../index.css"
import {Container, Col, Row} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Container >
                <Row className={"center "}>
                    <Col className={"col-auto "}>
                        <img className="rounded-circle  " height={70}
                             src="https://yt3.ggpht.com/a/AATXAJwQiilMz42HqxDCG2XJ6PBerYP44HiJH6edpT-ZHg=s900-c-k-c0xffffffff-no-rj-mo"
                             alt="HELOO"/>
                    </Col>
                    <Col className={"col-auto"}>

                        <Logo/>

                        <div>Learning React? Start Small.</div>
                        <div> {"{"} author: <a href="https://www.google.ru/">@dceddia</a> {"}"}</div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;