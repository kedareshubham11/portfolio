import { Grid, Snackbar, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CustomButton from '../../components/Button/Button';
import "./Contact.css";
import data from "../../utils/portfolioData";
import emailjs from "emailjs-com";

import {service_id, user_id, template_id} from "./EmailJSApiKeys";
import MuiAlert from '@material-ui/lab/Alert';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClick2 = () => {
        setOpen2(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };
    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen2(false);
    };

    const sendContact = ()=> {
        let templateParams = {
            name: name,
            email: email,
            message: message
        }
        emailjs.send(service_id, template_id, templateParams, user_id)
            .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);

        handleClick();

        }, function(error) {
        console.log('FAILED...', error);
        
        handleClick2();

        });

    }
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
                                    <TextField required fullWidth name="name" label="Name" value={name} onChange={(e) => setName(e.target.value)}>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required fullWidth name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField fullWidth name="message" label="Message" multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)}>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <span onClick={sendContact}>
                                    <CustomButton text="Submit" />
                                    </span>
                                    
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
                                        <a href={data.socials[key].link} target="_blank" rel="noreferrer">
                                            {data.socials[key].icon}
                                        </a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Contact sent successfully!
                    </Alert>
                </Snackbar>
                <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
                    <Alert onClose={handleClose2} severity="error">
                        Form Submission Faild !
                    </Alert>
                </Snackbar>
            </Grid>
        </div>
    )
}

export default Contact;
