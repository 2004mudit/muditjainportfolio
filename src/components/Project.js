// components/Projects.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container>
      <h2 style={{ marginBottom: '20px' }}>Projects and Work</h2>

      <h3>Employee Management System</h3>
      <p>
        Employee Management System (EMS) is an application for admins to manage employee details efficiently. 
        It replaces pen-and-paper methods in small-scale industries, offering cost-effective solutions. 
        EMS streamlines HR tasks, enhances operational efficiency, and fosters a productive workforce.
      </p>
      <p><strong>Technologies Used:</strong> Java (JRE, JVM), Java Swing Library, SQLite Database, Java Development Kit (JDK).</p>

      <h3>Namaste Wellness</h3>
      <p>
        Revolutionizing fitness with personalized platforms and a global community for holistic well-being. 
        Target users: Varied. Market selection: Diverse. Challenges: Sustainability, precision, complexity, competition. 
        Solutions: Gamification, customization, optimization, differentiation. Future work: Refinement.
      </p>
      <p><strong>Technologies Used:</strong> MongoDB (Atlas), React JS, Express JS, Tailwind CSS, Figma, Blender.</p>

      <p>
        I am a fast learner, self-driven, quick starter, and coding enthusiast with a curious mind who enjoys solving 
        complex and challenging real-world problems.
      </p>
    </Container>
  );
};

export default Projects;
