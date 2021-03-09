import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FlightIcon from '@material-ui/icons/Flight';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { Pool, SportsEsports } from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import netflix_image from "../assets/images/netflix.PNG";
import amazon_image from "../assets/images/amazon.PNG";
import instagram_image from "../assets/images/instagram.PNG";
import trackingapp_image from "../assets/images/trackingapp.png";
import musicapp__image from "../assets/images/musify.PNG";
import chatroom__image from "../assets/images/chatroom.PNG";


let data = {
    name: "Shubham Kedare",
    title: "Full Stack Developer",
    dob: "12th May 1998",
    email: "kedareshubham11@gmail.com",
    address: "Adgaon Khurd, Aurnagabad, Maharashtra.",

    contact : {
        Address:{
            value: "Adgaon Khurd, Aurangabad, Maharashtra. 431007",
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
            link: "https://www.linkedin.com/in/kedare-shubham-07a919195",
            text: "Linkedin",
            icon: <LinkedInIcon /> ,
        },
        github: {
            link: "https://github.com/kedareshubham11",
            text: "Github",
            icon: <GitHubIcon />,
        },
        instagram: {
            link: "https://www.instagram.com/k_dare_shubham",
            text: "Instagram",
            icon: <InstagramIcon />,
        }
        
    },

    about: "A disciplined and hardworking individual looking forward for a career with an organization which can help me with opportunities to enhance my knowledge, skills and techniques which in turn will be beneficial for the organization.",
    
    education: [
        {
            title: "Bachelor of Engineering",
            course: "Computer Science and Engineering",
            date: "2017 - 2020",
            description: "MIT College Aurangabad."
        },
        {
            title: "Diploma",
            course: "Computer Engineering",
            date: "2014 - 2017",
            description: "CSMSS College of Polytechnic Aurangabad."
        },
        {
            title: "SSC",
            course: "State Board of Maharashtra",
            date: "2013 - 2014",
            description: "P.S.P. Highschool adgaon khurd, Dist. Aurangabad."
        }
    ],

    hobbies: [
        {
            title: "Swimming",
            description: "",
            icon : <Pool />
        },
        {
            title: "Travelling",
            description: "",
            icon : <FlightIcon />
        },
        {
            title: "Gaming",
            description: "",
            icon : <SportsEsports />
        },
        {
            title: " ",
            description: "Exploring New technologies",
            icon : <NewReleasesIcon />
        },
       
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
            title: "VERSION CONTROL",
            description: [
                "Git",
                "GitHub",
            ]
        },
        {
            title: "TOOLS",
            description: [
                "VSCode",
                "Atom",
                "Pycharm",
                "Sublime Text"
            ]
        }
    ],

    projects: [
        {
            tag: 'React',
            title: "Musify",
            caption: "Spotify inspired Music App",
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
            caption: "Group Chat App",
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
            caption: "Live location tracking system for two wheeler.",
            image: trackingapp_image,
            description: "The main objective of this project is to provide tracking and accident detection system for two-wheeler. So, one can monitor and get immediate alerts in emergency cases for his own twowheeler. For this project we used technologies Django and mongoDB .",
            links: [
                {link: "https://github.com/csetwowheeler/twowheeler2020", icon: <GitHubIcon />},
                {link: "", icon: <LanguageIcon />},
            ],
        },
        
    ],


};
export default data;