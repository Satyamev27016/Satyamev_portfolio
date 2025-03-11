import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Satyamev Singh </span>
                        from <span className="purple"> Mirzapur, UP ,India.</span>
                        <br />
                        I am working on my own projects.
                        <br />
                        I am currently pursuing a B.Tech degree at Ajay Kumar Garg Engineering College.
                        <br />
                        I enjoy staying updated with the latest tech news and exploring cutting-edge technologies to fuel my passion for innovation and development.
                        <br />
                        As a software developer, I specialize in working with the MERN stack, which includes MongoDB, Express, React, and Node.js
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Wacthing Movies
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Tech Blogs, 
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Innovation Seeker
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Committed to creating impactful solutions!"{" "}
                    </p>
                    <footer className="blockquote-footer">Satyamev singh </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
