import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
    AiOutlineCode
} from "react-icons/ai";
import { FaLinkedinIn, FaTimes} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section text-black" id="about">
            <Container>
                <Row>
                <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple"> C++, Javascript and Python. </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    Generative AI.
                                </b>
                            </i>
                            <br />
                            <br />
                            I also apply my passion for developing products
                            with <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Satyamev27016"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://x.com/SatyamevS55675"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaTimes /> 
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/satyamev-singh-537717227/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/satyamev_thakur_/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://leetcode.com/u/SatyamevSingh/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineCode />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
