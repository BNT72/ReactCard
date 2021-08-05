import React, {Component} from 'react';
import CardPage from "./CardPage";
import CardDescription from "./CardDescription";

class CardFull extends Component {
    render() {
        return (
            <div>
                <CardPage icon={this.props.icon} text={this.props.text}
                          cardName={this.props.cardName} cardIcon={this.props.cardIcon} color={this.props.color}/>
                <div className={"rounded-bottom border p-2 "}>
                    <CardDescription text={this.props.text} description={this.props.description}/>
                </div>
            </div>
        );
    }
}

export default CardFull;