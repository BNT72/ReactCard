import React, {Component} from 'react';
import '../../../index.css';
import {Container} from "react-bootstrap";

class CardPage extends Component {
    render() {
        return (
            <Container style={{backgroundColor: this.props.color}}
                 className={"d-flex align-items-end flex-column m-auto rounded-top  sizeCard "}>
                <div className={"p-2 me-auto"}>
                    <img className="pl-2  " height={50}
                         src={this.props.icon}
                         alt="HELOO"/>
                </div>
                <div className={"h1  text-light  align-self-center"}>
                    {this.props.text}
                </div>

                <div className={"  bg-white   p-2 m-2"}>
                    <strong className={"p-3"} style={{color: this.props.color }}>{this.props.cardName}</strong>
                    <img height={50}
                         src={this.props.cardIcon}
                         alt="HELOO" className={""}/>
                </div>

            </Container>


        );
    }
}

export default CardPage;