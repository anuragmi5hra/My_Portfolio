import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="A social bonding platform that helps users connect, interact, and build meaningful relationships through shared interests."
              ghLink="https://github.com/anuragmi5hra/Bondify"
              demoLink="https://bondify-seven.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="An AI-powered study management system that helps students organize tasks, track progress, and improve productivity. It offers features like task scheduling, progress tracking, and personalized study recommendations to enhance learning efficiency."
              ghLink="https://github.com/anuragmi5hra/Ai_suggestion_student"
              demoLink="https://ai-suggestion-student-3.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="A responsive web-based calculator for performing basic arithmetic operations with a clean user interface. It allows users to input numbers and operators, providing real-time results and a seamless calculation experience."
              ghLink="https://github.com/anuragmi5hra/calculator"
              demoLink="https://anuragmi5hra.github.io/calculator/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="A task management application that allows users to create, update, and organize daily activities efficiently. It provides a user-friendly interface for managing tasks, setting priorities, and tracking progress, helping users stay organized and productive throughout the day."
              ghLink="https://github.com/anuragmi5hra/todo"
              demoLink="https://anuragmi5hra.github.io/todo/"
            />
          </Col>

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A responsive movie streaming platform inspired by Netflix, featuring movie browsing, authentication, and modern UI design."
              ghLink="https://github.com/anuragmi5hra/Netflix_clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
