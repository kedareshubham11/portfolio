import "./Profile.css";
import { Typography } from '@material-ui/core';
import profile_img from "../../assets/images/Profile_pic.jpg";
import React from 'react';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/CustomTimeline';

import data from "../../utils/portfolioData";
import PersonIcon from '@material-ui/icons/Person';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import GetAppIcon from '@material-ui/icons/GetApp';
import { keys } from "@material-ui/core/styles/createBreakpoints";
import  CustomButton from "../Button/Button";

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline__content">
            {link ? (<Typography className="timelineItem__text"><span>{title}</span>: <a href={link} targe="_blank">{text}</a></Typography>): (
                <Typography className="timelineItem__text"><span>{title}</span>: {text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

function Profile() {
    return (
        <div className="profile container__shadow">
            <div className="profile__name">
            <Typography className="name">{data.name}</Typography>
            <Typography className="title">{data.title}</Typography>
            </div>

            <figure className="profile__image">
                <img src={profile_img} alt="profile"/>
            </figure>

            <div className="profile__information">
                <CustomTimeline icon={<PersonIcon />} >
                    <CustomTimelineItem title={'Name'} text={data.name} />
                    <CustomTimelineItem title={'Birthdate'} text={data.dob} />
                    <CustomTimelineItem title={'Email'} text={data.email} />
                    <CustomTimelineItem title={'Address'} text={data.address} />

                    {Object.keys(data.socials).map(key => (
                        <CustomTimelineItem title={key} text={data.socials[key].text} link={data.socials[key].link}/>
                    ))}
                </CustomTimeline>
                
                <div className="button__container">
                    <CustomButton 
                    text={'Download Cv '}
                    icon={<GetAppIcon />}    
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile;
