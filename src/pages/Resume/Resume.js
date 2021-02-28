import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import "./Resume.css";

function Resume() {
    return (
        <div>
            {/* About Me  */}
            <Grid container className="section"></Grid>
                <Grid item className="section__title">
                    <span></span>
                    <Typography variant="h6">Aboute Me</Typography>
                </Grid>

            {/* Education and Experiences */}
            <Grid container className="section"></Grid>

            {/* Skills */}
            <Grid container className="section"></Grid>

            {/* contact */}
            <Grid container className="section"></Grid>


        </div>
    )
}

export default Resume;
