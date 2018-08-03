import React from 'react';
import imagebottom from "../images/backgroundImages/footerimg2.jpg";
import footImg from "../images/logos/GoCampLogoWhiteFooter.png";

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="float-right" id="finale"><img src={footImg} id="footer-img" /> </div>
                <div className="finale-left" id="finale"><b>Find us on: <a href="https://www.facebook.com" target="_blank">FaceBook</a> | <a href="https://www.instagram.com" target="_blank">Instagram</a> | <a href="https://www.twitter.com" target="_blank">Twitter</a></b></div>
                <img src={imagebottom} id="bottom-image" />
            </div>
        )
    }
}

