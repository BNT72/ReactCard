import React, {Component} from 'react';
import '../../../index.css'
class CardDescription extends Component {
    render() {
        return (
            < >
                <strong >{this.props.text}</strong>
                <div>{this.props.description}</div>

                <div className="text-black-50 ">dev.to</div>
            </>
        );
    }
}

export default CardDescription;

