import React, {useState} from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Collapse} from 'react-bootstrap';

const Services = () => {
    return (
        <div  style={{
            backgroundImage: 'url("https://wallpaperforu.com/wp-content/uploads/2021/02/Wallpaper-Black-And-White-Laptop-Computer-Keyboards-Tech43.jpg")',
            backgroundPosition: "center",
            backgoundSize: "cover",
        }}>
        <div className="services-header" >
            <h1>Services</h1>
        </div>
        <div className="services-wrapper">
            <Card
            img="https://th.bing.com/th/id/R.e2f00aab38a8792f5a66440db7419eea?rik=yBwIzn6iztcE%2fw&pid=ImgRaw&r=0"
            title="Economics"
            description="Having completed my studies in Quantitative Economics, I gained experience working as an Analyst for the European Central Bank (Economics department, Prices and Costs division)."
            edescription="With a good predisposition for data analysis and substantial knowledge over the Economic theory (focused on Macro and Micro modelling), my profile fits Economist / Economic Analyst roles. Check my Master Thesis in the Portfolio section."
            />
            <Card
            img="https://blog.qintesi.com/hubfs/data-analytics-pianificazione-finanziaria.jpg"
            title="Data Analytics"
            description="Strongly oriented toward statistical matter, I developed interest and gained experience with data analysis and the most spread Machine Learning algorithms."  
            edescription="Overall understanding over most common ML techniques, I was able to apply my skills in different University and personal projects. Worked with common unsupervised methods such as clustering, separatrix, classification trees and random forests and supervised like Logistics, OLS, GLS regressions. Recently expanding my horizons with online courses on Neural Network and Deep Network techniques."
             />
            <Card
            img="https://th.bing.com/th/id/OIP.RTMwlEQN_vjs6kzlge_0EQHaDE?pid=ImgDet&rs=1"
            title="IT & Smart Automation"
            description="Trained as back-end developer consultant at Teradata data Warehouse and currently working as IT Application Development Specialist at the European Central Bank's IT department."
            edescription="Experienced in working in the IT environment, through time I started to adopt a good mindset for Smart Automation. The satisfaction that comes from reducing manual workload by automating mechanical routine tasks have no price to me. Whether it is about automating data collection, production, dissemination processes, or automating Administrative processes for some platform / software through API, I believe any environment have its own routines, leading to margins for automation."
               />
            <Card
            img="https://www.ishir.com/wp-content/uploads/2018/03/new-2.jpg"
            title="Software Development"
            description="Developed a strong passion for programming, I am expanding my technical skill-set through time in different directions."
            edescription="Started as self-taught progammer during bachelor years, I broaded my technical skills with programming courses at VSE University and working in the IT environment. My passion for coding involves different fields, and I could apply what I learnt in a moltitude of personal projects (Web, Game, App Development). Check my portfolio for some example."
            />
        <div className="serv-bottom"><h1></h1></div>
        </div>
        </div>
    )
}

function Card(props) {
    const[open, setOpen] = useState(false)
    return(
        <div className="card">
            <div className="card-body">
                <img src={props.img} className="card-img" alt="loading..."/>
                <h2 className="card-title" style={{ textAlign: 'center' }}>{props.title}</h2>
                <p className="card-description" style={{ textAlign: 'justify' }}>{props.description}</p>
                <ExpandMoreIcon className="expand-icon" onClick={()=> setOpen(!open)}
                aria-controls="collapse"/>
                <Collapse in={open}>
                    <div id="collapse"  className="expand-description">
                        <h1 style={{ textAlign: 'justify' }}>{props.edescription}</h1>
                        <a href="/portfolio" className="btn-expand">PORTFOLIO</a>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Services