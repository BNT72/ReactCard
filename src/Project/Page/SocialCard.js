import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import Header from "../Components/Head/Header";
import CardFull from "../Components/Card/CardFull";
import Like from "../Components/Like";

class SocialCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.item.text,
            name: this.props.item.name,
            author: this.props.item.author,
            date: this.props.item.date,
            icon: this.props.item.icon,
            description: this.props.item.description,
            cardIcon: this.props.item.cardIcon,
            cardName: this.props.item.cardName,
            color: this.props.item.color
        }

    }

    render() {

        return (
            <Container className="App mt-3 border rounded p-2">
                <Row className={"m-auto"}>
                    <Header name={this.state.name} text={this.state.text} author={this.state.author}
                            date={this.state.date} icon={this.state.icon}/>
                </Row>
                <Row>
                    <CardFull text={this.state.text}  icon={this.state.icon}
                              description={this.state.description} cardIcon={this.state.cardIcon}
                              cardName={this.state.cardName} color={this.state.color}/>
                </Row>
                <Row>
                    <Like/>
                </Row>
            </Container>
        );
    }
}

export default SocialCard;