import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const lists = [
    'Flexible Classes',
    'Offline Classe Mode',
    'Educator Support'
];

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="section-gap-large edu-about-area about-style-7">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">About Us</span>
                                <h2 className="title">We are <span className="color-secondary">Happy</span> Teachers.</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p style={{fontSize: 18, lineHeight: 1.75 }}><b>We are a team of happy tutors</b> who consider ourselves as glowing candles, igniting the minds of students in a world filled with challenges.<br/>
                                <b>Our mission</b> is to create a brighter future by dedicating ourselves to helping students grasp concepts and techniques profoundly. <br/>
                                <b>We strive to ensure that</b> students gain a deep understanding and excel in their academic journeys, ultimately contributing to a brighter world.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/about/about.jpg" alt="About Image" />
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-38.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-37.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-04.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200"></li>
            </ul>
        </div>
    )
}

export default AboutArea;