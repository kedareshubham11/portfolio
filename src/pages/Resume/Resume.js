import { Grid, Icon, Paper, Typography } from '@material-ui/core';
import React from 'react';
import "./Resume.css";
import data from "../../utils/portfolioData";
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
function Resume() {
    
    return (
        <div>
            {/* About Me  */}
            <Grid container className="section pb__45">
                <Grid item className="section__title mb__30">
                    <span></span>
                    <h6>About Me</h6>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body2" className="aboutme__text">{data.about}</Typography>
                </Grid>
            </Grid>
            {/* Education and Experiences */}
            <Grid container className="section pb__45">

                <Grid item className="section__title mb__30">
                    <span></span>
                    <h6>Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className="resume__timeline">
                        {/* Work */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title={"Education"} icon={<SchoolIcon /> } >
                                {data.education.map(education => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline__content">
                                            <Typography className="timeline__title">{education.title}</Typography>
                                            <Typography className="timeline__date">{education.date}</Typography>
                                            <Typography variant="body2" className="timeline__description">{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>

                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}></Grid>
                    </Grid>
                </Grid>
            </Grid>
           
            {/* services */}
            <Grid container className="section pb__45">
                <Grid item className="section__title mb__30">
                    <span></span>
                    <h6>Services</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify="space-around">
                        {data.services.map(service => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className="service">
                                    <Icon className="service__icon">{service.icon}</Icon>
                                    <Typography className="service__title" variant="h6">{service.title}</Typography>
                                    <Typography className="service__description" variant="body2">{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>

             {/* Skills */}
             <Grid container className="section pb__45">
                <Grid item className="section__title mb__30">
                    <span></span>
                    <h6>Skills</h6>
                </Grid>

                <Grid container spacing={3} justify="space-between" className="section graybg pb__45">
                    {data.skilss.map(skill => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={0} className="skill">
                                <Typography variant="h6" className="skill__title">
                                    {skill.title}
                                </Typography>
                                {skill.description.map(element => (
                                    <Typography variant="body2" className="skill__description">
                                        <TimelineDot variant="outlined" className="timeline__dot" />{element}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
             </Grid>
             </Grid>

            {/* contact */}
            <Grid container className="section"></Grid>


        </div>
    )
}

export default Resume;
