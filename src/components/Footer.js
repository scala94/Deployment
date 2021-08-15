import React from 'react'
import PhoneIcon from "../whatsapp.png";
import EmailIcon from "../gmail.png";
import LinkIcon from "../linkedin.png";
import FacebookIcon from "../facebook.png";
import GitHubIcon from "../github.png";


function footer() {
    return (
        <div className="main-footer bg-dark">
            <div className="container">
                <div className="row">
                        <a className="footer-icon" href="/home"><img src={PhoneIcon} alt="logo..." style={{sizes:'10%'}}/></a>
                        <a className="footer-icon" href="/home"><img src={EmailIcon} alt="logo..." /></a>
                        <a className="footer-icon" href="https://www.linkedin.com/in/giacomo-scalabrin-06a399143/" ><img src={LinkIcon} alt="logo..." /></a>
                        <a className="footer-icon" href="https://www.facebook.com/people/Giacomo-Scalabrin/100018233657072/"><img src={FacebookIcon} alt="logo..." /></a>
                        <a className="footer-icon" href="https://github.com/scala94"><img src={GitHubIcon} alt="logo..." /></a>
                </div>
            </div>
        </div >

    )
}

export default footer;