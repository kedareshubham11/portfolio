import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FlightIcon from "@material-ui/icons/Flight";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { Pool, SportsEsports } from "@material-ui/icons";
import LanguageIcon from "@material-ui/icons/Language";
import netflix_image from "../assets/images/netflix.PNG";
import netflix_image_thumb from "../assets/images/netflix_thumb.png";
import amazon_image from "../assets/images/amazon.PNG";
import amazon_image_thumb from "../assets/images/amazon_thumb.png";
import instagram_image from "../assets/images/instagram.PNG";
import trackingapp_image from "../assets/images/trackingapp.png";
import trackingapp_image_thumb from "../assets/images/trackingapp_thumb.png";
import musicapp__image from "../assets/images/musify.PNG";
import musicapp_image_thumb from "../assets/images/musify_thumb.png";
import chatroom__image from "../assets/images/chatroom.PNG";
import chatroom_image_thumb from "../assets/images/chatroom_thumb.png";
import search_app from "../assets/images/searchapp.PNG";
import search_app_thumb from "../assets/images/searchapp_thumb.png";
import movie_db from "../assets/images/movie-db.PNG";
import movie_db_thumb from "../assets/images/movie-db_thumb.png";

let data = {
  name: "Shubham Kedare",
  title: "Full Stack Developer",
  dob: "12th May 1998",
  email: "kedareshubham11@gmail.com",
  address: "Adgaon Khurd, Auranagabad, Maharashtra. 431007",

  contact: {
    Address: {
      value: "Adgaon Khurd, Aurangabad, Maharashtra. 431007",
    },
    Phone: {
      value: "+917775954978",
    },
    Email: {
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
      icon: <LinkedInIcon />,
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
    },
  },

  about:
    "Hello, I'm Shubham Kedare. \n I'm a Full Stack Web Developer Specialized in React.",

  education: [
    {
      title: "Bachelor of Engineering",
      course: "Computer Science and Engineering",
      date: "2017 - 2020",
      description: "MIT College Aurangabad.",
    },
    {
      title: "Diploma",
      course: "Computer Engineering",
      date: "2014 - 2017",
      description: "CSMSS College of Polytechnic Aurangabad.",
    },
    {
      title: "SSC",
      course: "State Board of Maharashtra",
      date: "2013 - 2014",
      description: "P.S.P. Highschool adgaon khurd, Dist. Aurangabad.",
    },
  ],

  languages: ["English", "Hindi", "Marathi"],
  hobbies: [
    {
      title: "Swimming",
      description: "",
      icon: <Pool />,
    },
    {
      title: "Travelling",
      description: "",
      icon: <FlightIcon />,
    },
    {
      title: "Gaming",
      description: "",
      icon: <SportsEsports />,
    },
    {
      title: " ",
      description: "Exploring New technologies",
      icon: <NewReleasesIcon />,
    },
  ],

  skilss: [
    {
      title: "FRONT-END",
      description: ["ReactJS", "Javascript", "Boostrap", "Material UI"],
    },
    {
      title: "BACKE-END",
      description: ["NodeJs", "Express", "Python", "Java"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "MySQL", "MongoDB"],
    },
    {
      title: "VERSION CONTROL",
      description: ["Git", "GitHub"],
    },
    {
      title: "TOOLS",
      description: ["VSCode", "Atom", "Pycharm", "Sublime Text"],
    },
  ],

  projects: [
    {
      tag: "React",
      title: "Musify",
      caption: "Spotify inspired Music App",
      image: musicapp__image,
      thumb: musicapp_image_thumb,
      description:
        "(In Development...) Spotify inspired music app. Where user can play their favourite playlists or albums. Developed in Reactjs and Spotify Developers API.",
      links: [
        {
          link: "https://github.com/kedareshubham11/musify-react",
          icon: <GitHubIcon />,
        },
        {
          link: "https://shubham-kedare-musify.netlify.app/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      title: "Movie-DB",
      caption: "Movies Database App",
      image: movie_db,
      thumb: movie_db_thumb,
      description:
        "Movie-DB is an online database of information and Trailers about Movies, TV shows etc. This Web App created in ReactJS and TMDB-API. TMDB API is use to retrive all informatino about movies and shows. Youtube's API is used To find out trailers of movies.",
      links: [
        {
          link: "https://github.com/kedareshubham11/movie-db-react",
          icon: <GitHubIcon />,
        },
        {
          link: "https://shubham-kedare-movie-db.netlify.app/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      title: "Netflix Show Trailer",
      caption: "Netflix Show Information and Trailers.",
      image: netflix_image,
      thumb: netflix_image_thumb,
      description:
        "Netflix Shows Pictures and Netflix original's Trailer. Created with ReactJS and TMDB movie database API is used to retrieve information about Netflix movies and series. it has feature to show trailer of Netflix shows.",
      links: [
        {
          link: "https://github.com/kedareshubham11/Netflix-Shows",
          icon: <GitHubIcon />,
        },
        {
          link: "https://netflix-clone-kd-react.web.app",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      title: "Amazon Clone",
      caption: "Mimic of Amazon.com",
      image: amazon_image,
      thumb: amazon_image_thumb,
      description:
        "Amazon-clone mimic of amazon.com . It has features as create user, login, add to cart, order checkout and full payment functionality and previous orders. Created with ReactJS for frontend and Node.js Express for backend. Hosted on firebase hosting and firebase functions. Stripe’s API is used for payment functionality.",
      links: [
        {
          link: "https://github.com/kedareshubham11/EShop",
          icon: <GitHubIcon />,
        },
        { link: "https://clone-45306.web.app/", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "React",
      title: "Chat Room",
      caption: "Group Chat App",
      image: chatroom__image,
      thumb: chatroom_image_thumb,
      description:
        "Chat Room app. Where user can create room and chat with others. Created with (MERN) Stack MongoDB, Express, ReactJS, Node.js. Pusher API is used for making mongodb realtime to get chatmessages in realtime.",
      links: [
        {
          link: "https://github.com/kedareshubham11/Chat-Room-MERN",
          icon: <GitHubIcon />,
        },
        { link: "", icon: <LanguageIcon /> },
      ],
    },
     {
      tag: "React",
      title: "Instagram Clone",
      caption: "Mimic of Instagram.com",
      image: instagram_image,
      thumb: instagram_image,
      description:
        "Created with ReactJS and Firebase. It is a social media app. It has features like signup, login, create post, comments, update profile , view posts of others. Firebase is used for database and hosting",
      links: [
        {
          link: "https://github.com/kedareshubham11/SnapIT",
          icon: <GitHubIcon />,
        },
        {
          link: "https://insta-clone-kd-react.web.app/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Django",
      title: "Two Wheeler Tracking System",
      caption: "Live location tracking for two wheeler.",
      image: trackingapp_image,
      thumb: trackingapp_image_thumb,
      description:
        "The main objective of this project is to provide tracking and accident detection system for two-wheeler. So, one can monitor and get immediate alerts in emergency cases for his own twowheeler. Project created with Django, mongoDB, Redis .",
      links: [
        {
          link: "https://github.com/csetwowheeler/twowheeler2020",
          icon: <GitHubIcon />,
        },
        { link: "", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Django",
      title: "Foogle Search",
      caption: "Filter serach result from craiglist",
      image: search_app,
      thumb: search_app_thumb,
      description:
        "Foogle search is like search app. It search on craglist.com and provide the information and item price related with search keyword. After Clicking on any of search result it redirect to craglist.com to actual product where one can buy. Created with Django.",
      links: [
        {
          link: "https://github.com/kedareshubham11/codedaddies_list",
          icon: <GitHubIcon />,
        },
        { link: "", icon: <LanguageIcon /> },
      ],
    },
  ],
};
export default data;
