import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Satyamev_Resume_final.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

function ResumeNew() {
    const [width, setWidth] = useState(window.innerWidth);
    const [numPages, setNumPages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Improved responsive scaling logic
    const getScale = () => {
        if (width > 1200) return 1.4; // Large screens
        if (width > 992) return 1.2;  // Desktop
        if (width > 768) return 1.0;  // Tablet
        if (width > 576) return 0.8;  // Large mobile
        return 0.6; // Small mobile
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        console.log("PDF loaded successfully. Number of pages:", numPages);
        setNumPages(numPages);
        setIsLoading(false);
        setError(null);
    };

    const onDocumentLoadError = (error) => {
        console.error("Error loading PDF:", error);
        setError(error.message || "Failed to load PDF");
        setIsLoading(false);
    };

    return (
        <Container fluid className="resume-section">
            <Particle />
            
            {/* Download Button - Top */}
            <Row className="justify-content-center mb-4">
                <Col xs="auto">
                    <Button 
                        variant="primary" 
                        href={pdf} 
                        target="_blank" 
                        className="d-flex align-items-center"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload className="me-2" />
                        Download CV
                    </Button>
                </Col>
            </Row>

            {/* PDF Display Section */}
            <Row className="justify-content-center">
                <Col xs={12} sm={11} md={10} lg={9} xl={8} className="d-flex justify-content-center">
                    <div className="resume-container" style={{ 
                        maxWidth: '100%', 
                        overflow: 'hidden',
                        textAlign: 'center'
                    }}>
                        {isLoading && (
                            <div className="text-center p-4">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-2">Loading PDF...</p>
                            </div>
                        )}
                        
                        {error && (
                            <div className="alert alert-danger text-center" role="alert">
                                <strong>Error:</strong> {error}
                            </div>
                        )}
                        
                        <Document 
                            file={pdf} 
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading={
                                <div className="text-center p-4">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-2">Loading PDF document...</p>
                                </div>
                            }
                        >
                            {numPages && Array.from(new Array(numPages), (el, index) => (
                                <div 
                                    key={index} 
                                    className="pdf-page-container mb-3"
                                    style={{ 
                                        display: 'inline-block',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        background: 'white'
                                    }}
                                >
                                    <Page 
                                        pageNumber={index + 1} 
                                        scale={getScale()}
                                        loading={
                                            <div className="text-center p-3">
                                                Loading page {index + 1}...
                                            </div>
                                        }
                                        renderTextLayer={true}
                                        renderAnnotationLayer={true}
                                    />
                                </div>
                            ))}
                        </Document>
                    </div>
                </Col>
            </Row>

            {/* Download Button - Bottom */}
            <Row className="justify-content-center mt-4">
                <Col xs="auto">
                    <Button 
                        variant="primary" 
                        href={pdf} 
                        target="_blank" 
                        className="d-flex align-items-center"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload className="me-2" />
                        Download CV
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ResumeNew;