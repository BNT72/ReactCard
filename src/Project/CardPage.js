import React, {Component} from 'react';
import '../index.css';

class CardPage extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#FFA500"}}
                 className={"d-flex align-items-end flex-column m-auto rounded-top  sizeCard "}>
                <div className={"p-2 me-auto"}>
                    <img className="pl-2  " height={50}
                         src="https://yt3.ggpht.com/a/AATXAJwQiilMz42HqxDCG2XJ6PBerYP44HiJH6edpT-ZHg=s900-c-k-c0xffffffff-no-rj-mo"
                         alt="HELOO"/>
                </div>
                <div className={"h1  text-light  align-self-center"}>
                    Learning React? Start Small.
                </div>

                <div className={"  bg-white   p-2 m-2"}>
                    <strong className={"p-3"} style={{color: "#FFA500"}}>Dave Ceddia</strong>
                    <img height={50}
                         src="https://miro.medium.com/max/2400/1*PvySPRQOP2hkYakwe5hEiw.jpeg"
                         alt="HELOO" className={""}/>
                </div>

            </div>


        );
    }
}

export default CardPage;