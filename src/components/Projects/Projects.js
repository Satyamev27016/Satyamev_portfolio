import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LoveFood from "../../Assets/project1.png";
import Editor from "../../Assets/project2.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={LoveFood}
                            isBlog={false}
                            title="LoveFood"
                            description="LoveFood - A Full-Stack Food Delivery Website
                                        LoveFood is a full-stack food delivery platform built with React.js, Node.js, MongoDB, Material-UI, and Bootstrap. It features a seamless user authentication system (login/signup/logout), a dynamic food menu with selectable quantities (whole, half, quarter), an order management system, and a secure database integration with MongoDB. The backend ensures smooth order placement, history tracking, and refresh token-based authentication."
                            ghLink="https://github.com/Satyamev27016/loveFood2"
                            
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Editor}
                            isBlog={false}
                            title="Document Editing Tool"
                            description="Document Editing Tool
                                        A web-based real-time collaborative text editor that allows multiple users to edit documents simultaneously. Built with React.js, MongoDB, Quill, and Socket.io, it provides a seamless and interactive editing experience.
                            
                                Key Features:
                                ✅ Real-time Collaboration – Multiple users can edit a document at the same time.
                                ✅ Rich Text Editing – Powered by Quill for a smooth and customizable editing experience.
                                ✅ Persistent Storage – Documents are stored in MongoDB, ensuring easy retrieval and continued editing."
                            ghLink="https://github.com/Satyamev27016/DocumentEditingTool"
                            
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
