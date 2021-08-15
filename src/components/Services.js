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
            edescription=""

            />
            <Card
            img="https://blog.qintesi.com/hubfs/data-analytics-pianificazione-finanziaria.jpg"
            title="Data Analytics"
            description="Strongly oriented toward statistical matter, I developed interest and gained experience with data analysis and most spread Machine Learning algorithms."  
             />
            <Card
            img="https://th.bing.com/th/id/OIP.RTMwlEQN_vjs6kzlge_0EQHaDE?pid=ImgDet&rs=1"
            title="IT & Smart Automation"
            description="Trained as back-end developer consultant at Teradata data Warehouse and currently working as IT Application Development Specialist at the European Central Bank's IT department."
               />
            <Card
            img="https://www.ishir.com/wp-content/uploads/2018/03/new-2.jpg"
            title="Software Development"
            description="Developed a strong passion for programming, I am expanding my technical skill-set through time in different directions."
            />
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
                        <a href="/portfolio" className="btn-expand">check my portfolio</a>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Services