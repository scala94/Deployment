import React from "react";
import Typed from "react-typed";
import profile from "../profile.png";

const Header = () => {
    return (
        <div className="header-wraper" style={{
            backgroundImage: 'url("https://th.bing.com/th/id/R.95a58cdea949a8c983c92c86efe50f76?rik=2hMO%2fL9%2fVr3dAQ&pid=ImgRaw&r=0")',
            backgroundPosition: "center",
            backgoundSize: "cover",
        }}>
            <div className="main-info">
                <h1>Giacomo Scalabrin</h1>
                <Typed
                    className="typed-text"
                    strings={[ "Economics", "Data Analysis", "Machine Learning", "IT services", "Big Data Services", "Smart Automation", "Software Development", "Macroeconomic Modelling", "Game Development", "Web-App Development"]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                />
                <a className="foto-profile" href="/home"><img className="profile" src={profile} alt="logo..." /></a>
                <div className="main-description">
                    <h2>Research Analyst - European Central Bank</h2>
                    <h3>Economist and Data analyst, strongly passionate for programming</h3>
                </div>
                <a href="/contacts" className="btn-main-offer">contact me</a>
            </div>
            
        </div>
    )
}

export default Header
