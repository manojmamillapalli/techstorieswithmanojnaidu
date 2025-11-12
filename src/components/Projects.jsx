// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Shopping App",
    image: "https://cdn-icons-png.flaticon.com/512/263/263115.png", // Example web image
    description: (
      <>
        Java console based Shopping application with many features. User can buy, check order history, create account, etc. Admin can view all user, inventory, history, cost details
      </>
    ),
    codeLink: "https://github.com/yourusername/shopping-app",
    codeText: "Click here",
    loginScreenshot: "https://i.imgur.com/4M34hi2.png", // Example web screenshot
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    ],
  },
  {
    title: "Portfolio Website",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    description: (
      <>
        Personal portfolio built with React, showcasing my projects, blogs, and contact information. Responsive and modern UI.
      </>
    ),
    codeLink: "https://github.com/yourusername/portfolio",
    codeText: "Click here",
    loginScreenshot: "https://i.imgur.com/8Km9tLL.png",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    ],
  },
  {
    title: "Blog Platform",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: (
      <>
        A full-stack blog platform where users can write, edit, and comment on articles. Features authentication and markdown support.
      </>
    ),
    codeLink: "https://github.com/yourusername/blog-platform",
    codeText: "Click here",
    loginScreenshot: "https://i.imgur.com/2nCt3Sbl.jpg",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    ],
  },
  {
    title: "Weather Dashboard",
    image: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    description: (
      <>
        A weather dashboard app that fetches real-time weather data for any city using a public API. Clean UI and responsive design.
      </>
    ),
    codeLink: "https://github.com/yourusername/weather-dashboard",
    codeText: "Click here",
    loginScreenshot: "https://i.imgur.com/0y8Ftya.png",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            {project.loginScreenshot && (
              <img
                src={project.loginScreenshot}
                alt={project.title + " login screenshot"}
                className="project-login-img"
              />
            )}
            <h3>{project.title}</h3>
            <div className="project-tech-logos">
              {project.techStack && project.techStack.map((tech, i) => (
                <img key={i} src={tech.src} alt={tech.alt} title={tech.alt} className="tech-logo" />
              ))}
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                Code Link : <span className="project-link-highlight">{project.codeText}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
