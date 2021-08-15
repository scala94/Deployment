import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';
import CustomTimeline, { CustomTimelineSeparator } from './Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';

var experiences = [
    {
        title: 'European Central Bank, Frankfurt am Main, Germany',
        role: 'IT Application Development Specialist – DGIS/DAS',
        date: 'March 2021 - Present',
        description: 'Worked for the ECB Tableau team in processes’ automation withPython on an Administrative level (through Rest API).- Involved with data centralization (Big Data support), responsible forthe redesign the Survey of Professional Forecasters process andmigration to Hadoop based systems (DISC/SPACE)'
    },
    {
        title: 'European Central Bank, Frankfurt am Main, Germany',
        role: "Trainee Analyst in DG Economics – Prices and Costs (DGE-PAC)",
        date: 'February 2020 - February 2021',
        description: "supported the Forecast Team producing statistical analysis,visualisation solutions and preparing presentation of results forthe Macroeconomic Projection Exercises.- Pro-actively contributed to several processes’ automation.- Provided web scraping support with Python (through Scrapy)."
    },
    {
        title: 'Teradata GDC Centre, Prague, Czech Republic',
        role: "Trainee Analyst in DG Economics – Prices and Costs (DGE-PAC)",
        role: "Graduate Consultant, Teradata GDC",
        date: 'September 2019 - January 2020',
        description: "Trained in the Teradata Data Warehouse technology, in dataproduction processes, learned fundamental concepts of databaseDesign/Architecture and Database Administration.- Developed and applied back-end skills in projects and shadowingLufthansa Airline client (large usage of SQL and Shell scripting).- Introduced and worked with Big Data Hadoop based Systems(HIVE++).- Adopted principles of the Agile framework."
    }, {
        title: 'Bettin Pianoforti, Castelfranco Veneto (TV), Italy',
        role: "Salesman and piano teacher",
        date: 'June 2012 - Aug 2017',
        description: 'Worked part-time as a sales man in a musical instruments shop and gave private piano and solfeggio lessons along with my studies.'
    }
]

var education = [
    {
        title: 'Master Degree: Economics (major “Macroeconomic Policies”)',
        school: 'niversidade Catolica Portuguesa, Lisbon, Portugal',
        date: 'September 2017 - October 2019',
        description: 'Quantitative program focused on Macroeconomics and Microeconomics modelling, Econometrics, Macro Policies.- Published thesis: “Flat-tax and minimum income experiment in an OLG model of Italy”. The purpose was to simulate and quantify the impact of a pending fiscal policy in Italy over different cohort ages inan Overlapping Generation Model (with Python).'
    },
    {
        title: 'Exchange program: Finance and Proramming',
        school: 'VSE University of Economics, Prague, Czech Republic',
        date: 'September 2018 - January 2019',
        description: 'Intense programming courses with R: Basics to Intermediate- Finance classes Advance Derivatives, Credit Risk modelling and management, Business Valuation and Stochastic Processes.'
    },
    {
        title: 'Bachelor Degree: Economics and Business',
        school: 'Universitá Ca’ Foscari, Venice, Italy',
        date: 'September 2013 - July 2017'
    }
]

export default class Info extends Component {
    render() {
        return (
            <div>
                <div className="infoInfo"
                    style={{
                        backgroundImage: 'url("https://th.bing.com/th/id/OIP.qoNsq92OW-JI3C1PnnCc3gHaEo?pid=ImgDet&rs=1")',
                        backgroundPosition: "center",
                        backgoundSize: "cover",
                    }}>
                    <h1>About me</h1>
                    <h2 style={{ textAlign: 'justify' }}>Sergey Tkachenko aaaaaaaaaaa adwawada da dda f af a faefafafafaf ae feae faef ea fea faeafafaefa feae f ea efa f a efea</h2>
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
                                                    <Typography className='timeline_title'>{experience.role}</Typography>
                                                    <Typography className='timeline_date'>{experience.date}</Typography>
                                                    <Typography className='timeline_description' style={{ textAlign: 'justify' }}>{experience.description}</Typography>
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
                                                    <Typography className='timeline_title'>{education.school}</Typography>
                                                    <Typography className='timeline_date'>{education.date}</Typography>
                                                    <Typography className='timeline_description' style={{ textAlign: 'justify' }}>{education.description}</Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                    </CustomTimeline>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}
