import React, {Component} from 'react';
import SocialCard from "./SocialCard";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state={
            cards:[
                {
                    id:1,
                    text:"Learning React? Start Small. ",
                    name:"ThePracticalDev",
                    author: "@dceddia",
                    date:"Sep 10",
                    icon:"https://yt3.ggpht.com/a/AATXAJwQiilMz42HqxDCG2XJ6PBerYP44HiJH6edpT-ZHg=s900-c-k-c0xffffffff-no-rj-mo",
                    description:"Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps",
                    cardIcon:"https://miro.medium.com/max/2400/1*PvySPRQOP2hkYakwe5hEiw.jpeg",
                    cardName:"Dave Ceddia",
                    color:"#FFA500"
                },
                {
                    id:2,
                    text:"Writes a test react project! ",
                    name:"Developer",
                    author: "@vAlzhanov",
                    date:"Aug 8",
                    icon:"https://content.rutelega.com/contents/1/247530931_94783.jpg",
                    description:"Today we have implemented a test task for a beginner Java developer.",
                    cardIcon:"https://yt3.ggpht.com/a/AATXAJxKuN4KWsbb3nJ6P-PbbxM3jdAjKaSnXBTLgg=s900-c-k-c0xffffffff-no-rj-mo",
                    cardName:"Alzhanov vitaliy",
                    color: "#A9A9A9"
                }
            ]
        }
    }

    render() {
        const cards=this.state.cards
        return (
           <div>
               {cards.map(item=>(

                   <SocialCard key={item.id} item={item}/>
               ))}
           </div>
        );
    }
}

export default Cards;