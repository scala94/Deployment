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
        role: 'Research Analyst – Dir. General Statistics',
        date: 'October 2021 - Present',
        description: ["Responsible for Crypto Asset data distribution within ECB and maintaining internal webapp applications.",
                        "Supporting and improving Credit Risk data production and dissemination pipelines."]
    },
    {
        title: 'European Central Bank, Frankfurt am Main, Germany',
        role: 'Supervision Analyst – Dir. Horizontal Line Supervision',
        date: 'August 2021 - October 2021',
        description: ["Supported the Supervisory Methodology division working on data processes tuning and optimisation.",
                        "Actively proposed optimised solutions for improving the current technological infrastructure."]
    },    
    {
        title: 'European Central Bank, Frankfurt am Main, Germany',
        role: 'IT Application Development Specialist – DGIS/DAS',
        date: 'March 2021 - Present',
        description: ["Worked for Tableau Admin processes; automation with Python (through Tableau Rest API and postgre server).",
                        "Part of the data centralization team (ECB Big Data support), supported with databases redesign and migration processes (mainly worked with Oracle, Cloudera Hive and Impala servies)."]
    },
    {
        title: 'European Central Bank, Frankfurt am Main, Germany',
        role: "Trainee Analyst in DG Economics – Prices and Costs (DGE-PAC)",
        date: 'February 2020 - February 2021',
        description: ["Supported the Forecast Team producing statistical analysis, visualisation solutions and preparing presentation of results for the ECB (Broad) Macroeconomic Projection Exercises.", 
                        "Worked on Smart Automation processes in R (databases update, ECB official chartpack library).", 
                        "Provided web scraping support with Python (through Scrapy)."]
    },
    {
        title: 'Teradata GDC Centre, Prague, Czech Republic',
        role: "Graduate Consultant, Teradata GDC",
        date: 'September 2019 - January 2020',
        description: ["Trained in the Teradata Data Warehouse technology, in data collection, production and dissemination processes. Learned fundamental concepts of database Design / Architecture and Administration.", 
                        "Developed and applied back-end skills in projects and shadowing Lufthansa Airline client (mainly SQL and Shell scripting).", 
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
        school: 'Universidade Catolica Portuguesa, Lisbon, Portugal',
        date: 'September 2017 - October 2019',
        description: ['Quantitative program focused on Macroeconomics and Microeconomics modelling, Econometrics, Macro Policies.',
                        'Published thesis: “Flat-tax and minimum income experiment in an OLG model of Italy” which aims to simulate and quantify the impact of a pending fiscal policy in Italy over different cohort ages in an Overlapping Generation Model (with Python).']
    },
    {
        title: 'Exchange program: Finance and Proramming',
        school: 'VSE University of Economics, Prague, Czech Republic',
        date: 'September 2018 - January 2019',
        description: ['Intense Intermediate programming courses with R.', 
                        'Gained knowledge over financial matter (Advanced Derivatives, Business Valuation, Stochastic Processes).',
                        'Developed interest for machine learning with Credit Risk Modelling and Management. I had the opportunity to apply my skills in projects for the evaluation of the Default Probability in Non Performing Loans (NPL).']
    },
    {
        title: 'Bachelor Degree: Economics and Business',
        school: 'Universitá Ca’ Foscari, Venice, Italy',
        date: 'September 2013 - July 2017',
        description: ['Bachelor thesis on Blockchain technology: full insight over the Bitcoin Blockchain and showcase of potential applications with Smart Contracts (Ethereum project).']
    }
]

export default class Info extends Component {
    render() {
        return (
            <div>
                <div className="infoInfo"
                    style={{
                        backgroundImage: 'url("https://th.bing.com/th/id/R.b9eb2099bad0dcf234276daaf6e7a4ce?rik=1DhxMr7BT0SU4Q&pid=ImgRaw&r=0")',
                        backgroundPosition: "center",
                        backgoundSize: "cover",
                    }}>
                    <h1>About me</h1>
                    <h2 style={{ textAlign: 'justify' }}> Hello visitor, few information on my background.</h2>
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
