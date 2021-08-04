import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Like extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 190,
            like: "https://image.flaticon.com/icons/png/128/535/535285.png",
            hgt: 20
        };
        this.plus = this.plus.bind(this);
        this.handleMouseEvent = this.handleMouseEvent.bind(this);
        this.handleMouseEvent2 = this.handleMouseEvent2.bind(this);

    }

    plus() {
        this.setState(state => ({
            count: state.count + 1

        }));
    }


    handleMouseEvent() {

        this.setState(state => ({
            hgt: state.hgt + 5,
            like: "https://image.flaticon.com/icons/png/128/833/833472.png"
        }))


    }

    handleMouseEvent2() {

        this.setState(state => ({
            hgt: state.hgt - 5,
            like: "https://image.flaticon.com/icons/png/128/535/535285.png"
        }))


    }

    render() {

        return (
            <Container>
                <Row className={"mt-2 Like m-auto"}>
                    <Col className={"col-3"}>
                        <img src={"https://image.flaticon.com/icons/png/128/2462/2462719.png"} alt={"none"} height={20}/>
                        <span className={"p-2"}> 2</span>
                    </Col>

                    <Col className={"col-3"}><img src={"https://image.flaticon.com/icons/png/128/1388/1388895.png" } alt={"none"}
                                                  height={20}/>
                        <span className={"p-2"}>
                            47
                        </span>
                    </Col>

                    <Col className={"col-3"}> <img src={this.state.like} alt={"none"} onClick={this.plus} height={this.state.hgt}
                                                   onMouseEnter={this.handleMouseEvent}
                                                   onMouseLeave={this.handleMouseEvent2}
                    />

                        <span className={"p-1"}>
                        {this.state.count}
                        </span>
                    </Col>
                </Row>
            </Container>
        );


    }
}

export default Like;