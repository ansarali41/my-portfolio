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
                {/* blog 1 - React Basic */}
                <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://ansar-ict.medium.com/ten-important-javascript-interview-questions-you-must-know-c7bef8d4c99d"
                    >
                        <div className="project-images" id="reactBasic"></div>

                    </a>

                    <div className="project-links">
                        <div className="text">
                            <h3>
                                False:
                                as a beginner javascript learner people are very much confused about this topic, here is some examples and a list of false ...
                            </h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                href="https://ansar-ict.medium.com/ten-important-javascript-interview-questions-you-must-know-c7bef8d4c99d"
                                target="_blank"
                            >
                                <button type="button" class="see-more-button">See More</button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 2 - HTML5 */}
                <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://ansar-ict.medium.com/react-jsx-default-props-optimizing-performance-react-app-react-library-usestate-in-react-js-b851d348824b"
                    >
                        <div className="project-images" id="html5"></div>
                    </a>

                    <div className="project-links">
                        <div className="text">
                            <h3>
                                What is JSX?
                                JSX is JavaScript XML.
                                JXS allows writing HTML code in React.
                                React suggested to use JSX to describe ...
                            </h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                href="https://ansar-ict.medium.com/react-jsx-default-props-optimizing-performance-react-app-react-library-usestate-in-react-js-b851d348824b"
                                target="_blank"
                            >
                                {" "}
                                <button type="button" class="see-more-button">See More</button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* blog-3 */}
                <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a 
                    rel="noopener noreferrer" 
                    target="_blank" 
                    href="https://ansar-ict.medium.com/primitive-and-non-primitive-data-error-hanlding-try-catch-finally-and-coding-style-in-javascript-e22c087131ec">
                        <div className="project-images" id="ciscoPython"></div>
                    </a>

                    <div className="project-links">
                        <div className="text">
                            <h3>
                                Primitive :
                                there are six primitive values in javascript:
                                null, undefined, boolean, number, string, symbol, BigInt
                                why did we call ...
                            </h3>
                        </div>
                        <div className="icons">
                            <a 
                            rel="noopener noreferrer" 
                                href="https://ansar-ict.medium.com/primitive-and-non-primitive-data-error-hanlding-try-catch-finally-and-coding-style-in-javascript-e22c087131ec" 
                            target="_blank">
                                {" "}
                                <button type="button" class="see-more-button">See More</button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;
