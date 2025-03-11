import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/project1.png";
// import emotion from "../../Assets/pic.png";
// import editor from "../../Assets/project1.png";
import LoveFood from "../../Assets/project1.png";
// import suicide from "../../Assets/pic.png";
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
                            // demoLink="https://chatify-49.web.app/"
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
                            // demoLink="https://blogs.soumya-jit.tech/"
                        />
                    </Col>

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Editor.io"
                            description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                            ghLink="https://github.com/soumyajit4419/Editor.io"
                            demoLink="https://editor.soumya-jit.tech/"
                        />
                    </Col> */}

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Plant AI"
                            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                            ghLink="https://github.com/soumyajit4419/Plant_AI"
                            demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col> */}

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Ai For Social Good"
                            description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                            ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                        // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                        />
                    </Col> */}

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Face Recognition and Emotion Detection"
                            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                                        Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                            ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                        // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
                        />
                    </Col> */}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
