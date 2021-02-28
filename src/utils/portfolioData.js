import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { WebOutlined } from '@material-ui/icons';

let data = {
    name: "Shubham Kedare",
    title: "Full stack Developer",
    dob: "12th May 1998",
    email: "kedareshubham11@gmail.com",
    address: "Adgaon Khurd, Aurnagabad, Maharashtra",

    contact : {
        Address:{
            value: "Adgaon Khurd, Aurangabad, Maharashtra",
        },
        Phone:{
            value: "+917775954978",
        },
        Email:{
            value: "kedareshubham11@gmail.com",
        }, 
    },

    socials: {
        facebook: {
            link: "https://www.facebook.com/shubhamkedare11",
            text: "Facebook",
            icon: <FacebookIcon />,
        },
        linkedin: {
            link: "https://www.facebook.com/shubhamkedare11",
            text: "Linkedin",
            icon: <LinkedInIcon /> ,
        },
        github: {
            link: "https://www.facebook.com/shubhamkedare11",
            text: "Github",
            icon: <GitHubIcon />,
        },
        instagram: {
            link: "https://www.facebook.com/shubhamkedare11",
            text: "Instagram",
            icon: <InstagramIcon />,
        }
        
    },

    about: "A disciplined and hardworking individual looking forward for a career with an organization which can help me with opportunities to enhance my knowledge, skills and techniques which in turn will be beneficial for the organization. Skilled in Full Stack Web Development, MERN stack, GitHub, Python (Programming Language), and Django. Strong engineering professional with a Bachelor's degree focused in Computer Science from Marathwada Institute of Technology Engineering College, Aurangabad. ",
    education: [
        {
            title: "Bachelor of Engineering",
            date: "2017 - 2020",
            description: "Computer Science and Engineering \n MIT College Auranabad."
        },
        {
            title: "Diploma",
            date: "2014 - 2017",
            description: "Computer Engineering \n CSMSS COllege of Polytechnic Aurangabad."
        },
        {
            title: "SSC",
            date: "2013 - 2014",
            description: ""
        }
    ],

    services: [
        {
            title: "Web Developer",
            description: "I am Fullstack Web Developer",
            icon : <WebOutlined />
        },
        {
            title: "Web Developer",
            description: "I am Fullstack Web Developer",
            icon : <WebOutlined />
        },
        {
            title: "Web Developer",
            description: "I am Fullstack Web Developer",
            icon : <WebOutlined />
        }
    ],

    skilss: [
        {
            title: "FRONT-END",
            description: [
                "ReactJS",
                "Javascript",
                "Boostrap",
                "Material UI",
            ],
        },
        {
            title: "BACKE-END",
            description: [
                "NodeJs",
                "Python",
                "Java"
            ]
        },
        {
            title: "DATABASES",
            description: [
                "Firebase",
                "MySQL",
                "MongoDB"
            ]
        },
        {
            title: "SOURCE CONTROL",
            description: [
                "Git",
                "GitHub",
                "SCRUM/Agile"
            ]
        }
    ]


};
export default data;