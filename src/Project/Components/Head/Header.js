import React, {Component} from 'react';
import HeadInfo from "./HeadInfo"
import "../../../index.css"
import {Col, Container, Image, Row} from "react-bootstrap";

class Header extends Component {
 

    render() {

        return (

            <Container>
                <Row className={"center "}>
                    <Col className={"col-auto "}>
                        <Image className="rounded-circle  " height={70}
                               src={this.props.icon}
                               alt="HELOO"/>
                    </Col>
                    <Col className={"col-auto"}>

                        <HeadInfo name={this.props.name} date={this.props.date}/>

                        <div>{this.props.text} <br/>
                            {"{"} author: <a href="https://www.google.ru/">{this.props.author}</a> {"}"}
                        </div>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;