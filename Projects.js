import { useState } from "react";
import Modal from "./Modal";

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (title, desc, tech, github, live) => {
        setSelectedProject({ title, desc, tech, github, live });
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="project">

                {/* Project 1 - Personal Portfolio */}
                <div
                    className="project-card"
                    onClick={() =>
                        openProject(
                            "Personal Portfolio",
                            "Responsive portfolio website with smooth scrolling and modern UI design, built using React JS and showcasing my skills professionally.",
                            "HTML, CSS, JavaScript, React",
                            "https://github.com/UttekarAditi/Personal-Portfolio-Website",
                            "https://aditiuttekarportfolio.netlify.app/"
                        )
                    }
                >
                    <h3>Personal Portfolio</h3>
                    <p>Click to view details</p>
                </div>

                {/* Project 2 - Currency Exchange */}
                <div
                    className="project-card"
                    onClick={() =>
                        openProject(
                            "Automatic E-Currency Exchange",
                            "A web-based system that converts currencies automatically using real-time exchange rates through API integration.",
                            "React, API Integration, JavaScript, CSS",
                            "https://github.com/UttekarAditi/Personal-Portfolio-Website",
                            "https://aditiuttekarportfolio.netlify.app/"
                        )
                    }
                >
                    <h3>Automatic E-Currency Exchange</h3>
                    <p>Click to view details</p>
                </div>

                {/* Project 3 - E-Commerce */}
                <div
                    className="project-card"
                    onClick={() =>
                        openProject(
                            
                            "E-Commerce Website",
                            "Full-stack e-commerce platform with product listing, cart system, and checkout functionality.",
                            "React, Node.js, MongoDB, Express",
                            "https://github.com/UttekarAditi/Personal-Portfolio-Website",
                            "https://aditiuttekarportfolio.netlify.app/"
                        )
                    }
                >
                    <h3>E-Commerce Website</h3>
                    <p>Click to view details</p>
                </div>

            </div>

            <Modal project={selectedProject} closeModal={closeProject} />
        </section>
    );
}

export default Projects;
