import React from "react";
import "./../index.css";
import { motion } from "framer-motion";
import ciscoImage from "./../images/certificates/PCAP (Certified Associate in Python Programming).png";

const boxVariants = {
    hover: {
        scale: 1.06,
        transition: {
            type: "spring",
        },
    },
};

const Blogs = () => {
    return (
        <section
            data-aos="fade-up"
            className="achievements-container"
            name="achievements"
            id="achievements"
        >
            <h1 className="heading">Blogs</h1>
            <div className="projects-container">
                <h1>Blogs section is coming soon ...</h1> 
                {/* Project 1 - React Basic */}
                {/* <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.hackerrank.com/certificates/6b34ec5a135a"
                    >
                        <div className="project-images" id="reactBasic"></div>
                    </a>

                    <div className="project-links">
                        <div className="text">
                            <h3>React Basic (HackerRank)</h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                href="https://www.hackerrank.com/certificates/6b34ec5a135a"
                                target="_blank"
                            >
                                <i
                                    className="fas fa-external-link-alt"
                                    title="live preview"
                                    id="live"
                                ></i>
                            </a>
                        </div>
                    </div>
                </motion.div> */}

                {/* Project 2 - HTML5 */}
                {/* <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.coursera.org/account/accomplishments/certificate/G83XS5DQJCN8"
                    >
                        <div className="project-images" id="html5"></div>
                    </a>

                    <div className="project-links">
                        <div className="text">
                            <h3>Intro to HTML5 (Michigan University)</h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                href="https://www.coursera.org/account/accomplishments/certificate/G83XS5DQJCN8"
                                target="_blank"
                            >
                                {" "}
                                <i
                                    className="fas fa-external-link-alt"
                                    title="url"
                                    id="live"
                                ></i>
                            </a>
                        </div>
                    </div>
                </motion.div> */}

                {/* Project 3 - Cisco Python */}
                {/* <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a rel="noopener noreferrer" target="_blank" href={ciscoImage}>
                        <div className="project-images" id="ciscoPython"></div>
                    </a>

                    <div className="project-links">
                        <div className="text">
                            <h3>Programming Associate in Python (Cisco)</h3>
                        </div>
                        <div className="icons">
                            <a rel="noopener noreferrer" href={ciscoImage} target="_blank">
                                {" "}
                                <i
                                    className="fas fa-external-link-alt"
                                    title="url"
                                    id="live"
                                ></i>
                            </a>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Blogs;
