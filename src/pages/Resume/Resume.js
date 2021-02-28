import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import "./Resume.css";
import data from "../../utils/portfolioData";
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
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
            <Grid container className="section">
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
            {/* Skills */}
            <Grid container className="section"></Grid>

            {/* contact */}
            <Grid container className="section"></Grid>


        </div>
    )
}

export default Resume;
