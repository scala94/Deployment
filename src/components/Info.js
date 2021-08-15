import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';
import CustomTimeline, { CustomTimelineSeparator } from './Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import Pdf from "../CV_GiacomoScalabrin.pdf";

var experiences = [
    {
        title: 'European Central Bank, Frankfurt am Main, Germany',
        role: 'IT Application Development Specialist – DGIS/DAS',
        date: 'March 2021 - Present',
        description: ["Worked in Tableau Smart Automation processes’ with Python on an Administrative level (through Tableau Rest API).",
                        "Involved with data centralization (ECB Big Data support), responsible for the redesign the Survey of Professional Forecasters process and its migration from Oracle to Hive/Impala based system (DISC/SPACE)"]
    },
    {
        title: 'European Central Bank, Frankfurt am Main, Germany',
        role: "Trainee Analyst in DG Economics – Prices and Costs (DGE-PAC)",
        date: 'February 2020 - February 2021',
        description: ["supported the Forecast Team producing statistical analysis, visualisation solutions and preparing presentation of results for the ECB Macroeconomic Projection Exercises.", 
                        "Worked on different Smart Automation processes in R (databases update, ECB official chartpack library).", 
                        "Provided web scraping support with Python (through Scrapy)."]
    },
    {
        title: 'Teradata GDC Centre, Prague, Czech Republic',
        role: "Graduate Consultant, Teradata GDC",
        date: 'September 2019 - January 2020',
        description: ["Trained in the Teradata Data Warehouse technology, in data collection, production and dissemination processes. Learned fundamental concepts of database Design / Architecture and Administration.", 
                        "Developed and applied back-end skills in projects and shadowing Lufthansa Airline client (advance SQL and Shell scripting).", 
                        "Introduced and worked with Big Data Hadoop based Systems (through HIVE++ and Apache Sparks).", 
                        "Adopted principles of the Agile framework."]
    }, {
        title: 'Bettin Pianoforti, Castelfranco Veneto (TV), Italy',
        role: "Salesman and piano teacher",
        date: 'June 2012 - Aug 2017',
        description: ['Worked part-time as a sales man in a music instruments shop and gave private piano and solfeggio lessons along with my studies.']
    }
]

var education = [
    {
        title: 'Master Degree: Economics (major “Macroeconomic Policies”)',
        school: 'niversidade Catolica Portuguesa, Lisbon, Portugal',
        date: 'September 2017 - October 2019',
        description: ['Quantitative program focused on Macroeconomics and Microeconomics modelling, Econometrics, Macro Policies.',
                        'Published thesis: “Flat-tax and minimum income experiment in an OLG model of Italy”. The purpose was to simulate and quantify the impact of a pending fiscal policy in Italy over different cohort ages inan Overlapping Generation Model (with Python).']
    },
    {
        title: 'Exchange program: Finance and Proramming',
        school: 'VSE University of Economics, Prague, Czech Republic',
        date: 'September 2018 - January 2019',
        description: ['Intense Intermediate programming courses with R', 
                        'Gained knowledge over financial matter (Advanced Derivatives, Business Valuation, Stochastic Processes)',
                        'Developed interest for machine learning with Credit Risk modelling and management.']
    },
    {
        title: 'Bachelor Degree: Economics and Business',
        school: 'Universitá Ca’ Foscari, Venice, Italy',
        date: 'September 2013 - July 2017',
        description: ['Thesis on Blockchain technology: full insight over the Bitcoin Blockchain and showcase of potential applications with Smart Contracts (Ethereum project).']
    }
]

export default class Info extends Component {
    render() {
        return (
            <div>
                <div className="infoInfo"
                    style={{
                        backgroundImage: 'url("https://wallpaperforu.com/wp-content/uploads/2021/02/Wallpaper-Black-And-White-Laptop-Computer-Keyboards-Tech43.jpg")',
                        backgroundPosition: "center",
                        backgoundSize: "cover",
                    }}>
                    <h1>About me</h1>
                    <h2 style={{ textAlign: 'justify' }}> Hello visitor, my name is Giacomo Scalabrin and I am working IT Application Development Specialist for the European Central Bank. With a background in Economics, a good predisposition toward data analysis and a strong passion for programming, I built up through time an interesting and diversified set of skills.</h2>
                    <div className="info-grid">
                        <Grid Item xs={12}>
                            <Grid container className='resume_timeline'>
                                <Grid Item sm={12} md={6}>
                                    <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                                        {experiences.map(experience => (
                                            <TimelineItem>
                                                <CustomTimelineSeparator />
                                                <TimelineSeparator className="separator_padding">
                                                </TimelineSeparator>
                                                <TimelineContent className="timeline_fullcontent">
                                                    <Typography className='timeline_title'>{experience.title}</Typography>
                                                    <Typography className='timeline_title1'>{experience.role}</Typography>
                                                    <Typography className='timeline_date'>{experience.date}</Typography>
                                                    {experience.description.map(desc => (
                                                    <Typography className='timeline_description' style={{ textAlign: 'justify' }}>{desc}</Typography>
                                                    ))}
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                    </CustomTimeline>
                                </Grid>
                                <Grid Item sm={12} md={6}>
                                    <CustomTimeline title='Education' e icon={<SchoolIcon />}>
                                        {education.map(education => (
                                            <TimelineItem>
                                                <CustomTimelineSeparator />
                                                <TimelineSeparator className="separator_padding">
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    <Typography className='timeline_title'>{education.title}</Typography>
                                                    <Typography className='timeline_title1'>{education.school}</Typography>
                                                    <Typography className='timeline_date'>{education.date}</Typography>
                                                    {education.description.map(descr => (
                                                    <Typography className='timeline_description' style={{ textAlign: 'justify' }}>{descr}</Typography>
                                                    ))}
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                    </CustomTimeline>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <a className="CV-button" href = {Pdf}>Download Pdf Resume</a>
                    </div>
                    <div>
                        <h1> </h1>
                    </div>
                </div>
            </div>
        )
    }
}
