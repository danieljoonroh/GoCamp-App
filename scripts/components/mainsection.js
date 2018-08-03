import React from 'react';
import ImageForBackground from "../images/backgroundImages/MainBackground.png";

var backgroundStyle = {
    marginTop: "100px",
    height: "800px",
    width: "100%",
    backgroundImage: "url(" + ImageForBackground + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default class MainSection extends React.Component {
    render() {
        return (
            <div style={backgroundStyle}>
                <div className="quote">
                    <p> "Wilderness is a necessity... there must be places for human beings to satisfy their souls."<br/> - John Muir </p>
                    <div className="breakdiv"></div>
                    <p> Here at GoCamp our goal is to help you enjoy the great outdoors as much as we do. We are here to help you plan your next trip to one of the many great places nature has to offer. </p>
                </div>
            </div>
        )
    }
}
