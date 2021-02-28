import { Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import CustomButton from '../../components/Button/Button';
import "./Contact.css";
import data from "../../utils/portfolioData";

function Contact() {
    return (
        <div >
            <Grid container className="contact" spacing={6}>
                {/* contact form */}
                <Grid item xs={12} lg={7} className="contact__form">
                    <Grid container>
                        <Grid item className="section__title mb__30">
                            <span></span>
                            <h6>Contact Form</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="name" label="Name">
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="email" label="Email">
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField fullWidth name="message" label="Message" multiline rows={4}>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <CustomButton text="Submit"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* contact information */}
                <Grid item xs={12} lg={5} className="contact__info">
                    <Grid container>
                    <Grid item className="section__title mb__30">
                            <span></span>
                            <h6>Contact Informations</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {Object.keys(data.contact).map(key => (
                                    <Grid item xs={12}>
                                      <Typography className="contactInfo__item">
                                          <span>{key}: </span>{data.contact[key].value}
                                      </Typography>
                                  </Grid>
                                ))}
                              
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Grid container className="contactInfo__socialContainer">
                                {Object.keys(data.socials).map(key => (
                                    <Grid item className="contactInfo__social">
                                        <a href={data.socials[key].link}>
                                            {data.socials[key].icon}
                                        </a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;
