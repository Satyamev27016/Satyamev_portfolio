import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/SatyamevSingh_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
    ).toString();

function ResumeNew() {
    const [width, setWidth] = useState(window.innerWidth);
    const [numPages, setNumPages] = useState(null);

    // Handle window resize to update width dynamically
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container fluid className="resume-section">
            <Particle />
            <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
                    <AiOutlineDownload />
                    &nbsp;Download CV
                </Button>
            </Row>

            <Row className="resume d-flex justify-content-center">
                <Document 
                    file={pdf} 
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    onLoadError={(error) => console.error("Error loading PDF:", error)}
                >
                    {/* Display all pages dynamically */}
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={index} pageNumber={index + 1} scale={width > 786 ? 1.2 : 0.6} />
                    ))}
                </Document>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
                    <AiOutlineDownload />
                    &nbsp;Download CV
                </Button>
            </Row>
        </Container>
    );
}

export default ResumeNew;
