import React, { Component } from "react";
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import immg4 from "../assests/free-stock-image-1.jpg";
import img4 from "../assests/html5.png";
import img5 from "../assests/css3.png";
import img6 from "../assests/javascript.png";
import img7 from "../assests/bootstrap4.png";
import img8 from "../assests/react.png";
import img11 from "../assests/mysql.png";
import img9 from "../assests/python.png";
import img10 from "../assests/flask.png";
import axios from "axios";

const Context = React.createContext();
export class Provider extends Component {
  statechangehandler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          stacks: [newObject, ...this.state.stacks],
        });
    }
  };
  state = {
    statechangehandler: this.statechangehandler,
    stacks: [
      {
        id: 1,
        title:
          "He is a good engineer, He is very passionate about his career and job, he is ambitious too",
        excerpt: "Random guy 1",
        company: "CEO at ABC company",
      },
      {
        id: 2,
        title: "He is an excellent developer",
        excerpt: "Random guy 2",
        company: "Director at ABC company",
      },
      {
        id: 3,
        title: "He is a lazy person",
        excerpt: "Random guy 3",
        company: "Manager at ABC company",
      },
      {
        id: 4,
        title: "He get's things done so quickly",
        excerpt: "Random guy 4",
        company: "SDE at ABC company",
      },
    ],
    skills: [
      {
        id: 1,
        imageUrl: img4,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 2,
        imageUrl: img5,
        totalstars: 3,
        greystars: 3,
      },
      {
        id: 3,
        imageUrl: img6,
        totalstars: 3,
        greystars: 1,
      },
      {
        id: 4,
        imageUrl: img7,
        totalstars: 3,
        greystars: 3,
      },
      {
        id: 5,
        imageUrl: img8,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 6,
        imageUrl: img9,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 7,
        imageUrl: img10,
        totalstars: 3,
        greystars: 3,
      },
      {
        id: 8,
        imageUrl: img11,
        totalstars: 3,
        greystars: 1,
      },
    ],
    projects: [
      {
        id: 1,
        title: "SRM Insights",
        imageurl: img1,
        excerpt: "SRM Insights: Your platform for sharing, discussing, and tracking college experiences, interview insights, and personalized reviews",
        body: "SRM Insights is a platform dedicated to enhancing the college experience for students. It provides a space for students to share interview experiences, offer reviews on the college environment, and engage in insightful discussions. Each student has a personalized account to keep track of their contributions and reviews. The platform aims to create a collaborative community where students can benefit from shared knowledge and experiences. Built on the MERN (MongoDB, Express.js, React.js, Node.js) stack, SRM Insights ensures a modern and user-friendly interface, promoting seamless interactions and scalability.",
        link: "https://frontend-in.vercel.app/",
        frontendGithub: "https://github.com/aryan618/Frontend-in",
        backendGithub: "https://github.com/aryan618/Backend-in"
      },
      {
        id: 2,
        title: "Video Chat Application",
        imageurl: img2,
        excerpt: "Implementation of a robust video chat application",
        body: "I spearheaded the development of a cutting-edge video chat application, optimizing performance through a robust tech stack. Leveraging Node.js and Express on the backend, the implementation included Socket.io for streamlined WebSocket communication, leading to a remarkable 30% reduction in server response time. The application further embraced WebRTC technology to facilitate seamless real-time audio and video communication. This project not only showcases my proficiency in backend development but also highlights my commitment to enhancing user experience and system efficiency.",
        link: "https://6550127c8de2e11247ae6c66--shiny-torte-9c092c.netlify.app/",
        frontendGithub: "https://github.com/aryan618/client-Video-Chat-App",
        backendGithub: "https://github.com/aryan618/server-video-chat-app"
      },
      {
        id: 3,
        title: "Cryptocurrency Finance Price Tracker App",
        imageurl: img3,
        excerpt: "React-based Crypto Price Tracker with powerful search functionality.",
        body: "I developed a Cryptocurrency Finance Price Tracker App using React.js, featuring hooks and Axios for streamlined API management. This application serves as an intuitive tool for real-time tracking of cryptocurrency prices, offering users a robust search functionality. The use of React.js ensures a responsive interface, while the incorporation of hooks enhances state management, contributing to a smooth user experience. This project showcases my expertise in frontend development and creating functional applications tailored to the dynamic nature of cryptocurrency markets.",
        link: "https://react-api-crypto-tracker-v1.vercel.app/",
        frontendGithub: "https://github.com/aryan618/react-api-crypto-tracker-v1",
        backendGithub: ""
      },
      {
        id: 4,
        title: "Project 4",
        imageurl: immg4,
        excerpt: "This is my project about....",
        body: "body4",
        link: "",
        frontendGithub: "",
        backendGithub: ""
      },
    ],
  };
  async componentDidMount() {
    const [
      responses_recommendations,
      responses_skills,
      responses_projects,
    ] = await Promise.all([
      axios.get("http://127.0.0.1:9000/api/recommendations"),
      axios.get("http://127.0.0.1:9000/api/skills"),
      axios.get("http://127.0.0.1:9000/api/projects"),
    ]);
    const newState = {};
    if (
      responses_recommendations.data.isSuccessful &&
      responses_recommendations.data.results.length != 0
    ) {
      newState.stacks = responses_recommendations.data.results;
    }
    if (
      responses_skills.data.isSuccessful &&
      responses_skills.data.results.length != 0
    ) {
      newState.skills = responses_skills.data.results;
    }
    if (
      responses_projects.data.isSuccessful &&
      responses_projects.data.results.length != 0
    ) {
      newState.projects = responses_projects.data.results;
    }
    this.setState(newState);
    // let responses = await axios.get(
    //   "http://127.0.0.1:9000/api/recommendations"
    // );
    // console.log(responses);
    // if (responses.data.isSuccessful) {
    //   this.setState({
    //     stacks: responses.data.results,
    //   });
    // }
    // responses = await axios.get("http://127.0.0.1:9000/api/skills");
    // console.log(responses);
    // if (responses.data.isSuccessful) {
    //   this.setState({
    //     skills: responses.data.results,
    //   });
    // }
    // responses = await axios.get("http://127.0.0.1:9000/api/projects");
    // console.log(responses);
    // if (responses.data.isSuccessful) {
    //   this.setState({
    //     projects: responses.data.results,
    //   });
    // }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
