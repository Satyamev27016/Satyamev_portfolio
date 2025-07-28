import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LoveFood from "../../Assets/project1.png";
import Editor from "../../Assets/project2.png";
import ludo from "../../Assets/ludo.png";

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

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ludo} 
                            isBlog={false}
                            title="Ludo Master"
                            description={`Ludo Master
                           A digital remake of the classic Ludo board game using Unity Engine and C#. Designed for both fun and functionality, it mimics the real-world game with added digital effects.

                    Key Features:
                      ✅ **Multiplayer Support** – Allows 2 to 4 players to play in turns with accurate Ludo rules.
                      ✅ **Realistic Token Movement** – Smooth animations with curve-following and step-based logic.
                      ✅ **Fire Trail Effect** – Tokens leave a subtle animated fire trail like in Ludo King.
                      ✅ **Dynamic Ring Rotation** – Rotating outer rings give the game a visually engaging experience.
                      ✅ **Unity Animator + C# Scripting** – Complete movement logic and visual effects built using Unity’s animation system and custom scripts.
                      ✅ **Layered Token Control** – Ensures tokens don’t overlap using sorting layers and colliders.
                      ✅ **Visual Polish** – Custom 2D assets, seamless ring textures, and layered UI for clarity.

                    Tech Stack:
                      🎮 Unity 2022
                      💻 C# for game mechanics
                      🖼️ Photoshop + Illustrator (for assets)
                      🎨 Shader Graph & Materials for ring effects
                      🧪 Fully tested for all token movement edge cases

                      Ideal for showcasing **game development**, **animations**, and **Unity proficiency** in portfolio projects.`}
                            ghLink="https://github.com/Satyamev27016/LudoMaster_Satyamev"
                    />
                </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
