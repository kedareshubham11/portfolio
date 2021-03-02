import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { WebOutlined } from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import netflix_image from "../assets/images/netflix.PNG";
import amazon_image from "../assets/images/amazon.PNG";
import instagram_image from "../assets/images/instagram.PNG";
import trackingapp_image from "../assets/images/trackingapp.png";
import musicapp__image from "../assets/images/musify.PNG";
import chatroom__image from "../assets/images/chatroom.PNG";

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
            description: "Computer Science and Engineering. \nMIT College Auranabad."
        },
        {
            title: "Diploma",
            date: "2014 - 2017",
            description: "Computer Engineering \n CSMSS College of Polytechnic Aurangabad."
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
    ],

    projects: [
        {
            tag: 'React',
            title: "Musify",
            caption: "Spotify inspire Music App",
            image: musicapp__image,
            description: "Spotify inspired music app. Developed with the help of Spotify Developers API.",
            links: [
                {link: "", icon: <GitHubIcon />},
                {link: "", icon: <LanguageIcon />},
            ]
        },
        {
            tag: 'React',
            title: "Netflix Show Trailer",
            caption: "",
            image: netflix_image,
            description:"Netflix clone’s frontend is same as original Netflix. TMDB movie database API is used to retrieve information about Netflix movies and series and it has feature to show trailer of Netflix shows.",
            links: [
                {link: "https://github.com/kedareshubham11/portfolio", icon: <GitHubIcon />},
                {link: "", icon: <LanguageIcon />},
            ],
        },
        {
            tag: 'React',
            title: "Amazon Clone",
            caption: "Mimic of Amazon.com",
            image: amazon_image,
            description: "Amazon-clone mimic of amazon.com . It has features as create user, login, add to cart, order checkout and full payment functionality and previous orders. Stripe’s API is used for payment functionality.",
            links: [
                {link: "https://github.com/kedareshubham11/portfolio", icon: <GitHubIcon />},
                {link: "https://clone-45306.web.app/", icon: <LanguageIcon />},
            ]
        },
        {
            tag: 'React',
            title: "Instagram Clone",
            caption: "Mimic of Instagram.com",
            image: instagram_image,
            description: "Created with ReactJS and Firebase. It has features like signup, login, create post, comments, update profile , view posts of others. Firebase is used for database and hosting",
            links: [
                {link: "", icon: <GitHubIcon />},
                {link: "https://insta-clone-kd-react.web.app/", icon: <LanguageIcon />},
            ]
        },
        {
            tag: 'React',
            title: "Chat Room",
            caption: "",
            image: chatroom__image,
            description: "Chat Room app. Where user can create room and chat with others",
            links: [
                {link: "", icon: <GitHubIcon />},
                {link: "", icon: <LanguageIcon />},
            ]
        },
        {
            tag: 'Python',
            title: "Two Wheeler Tracking System",
            caption: "",
            image: trackingapp_image,
            description: "The main objective of this project is to provide tracking and accident detection system for two-wheeler. So, one can monitor and get immediate alerts in emergency cases for his own twowheeler. For this project we used technologies Django and mongoDB .",
            links: [
                {link: "", icon: <GitHubIcon />},
                {link: "", icon: <LanguageIcon />},
            ],
        },
        
    ],


};
export default data;