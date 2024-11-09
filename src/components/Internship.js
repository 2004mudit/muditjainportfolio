// components/Internships.js
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Internships = () => {
  return (
    <Container>
      <h2>Internships and Courses</h2>
      <ListGroup>
        <ListGroup.Item>
          <strong>Machine Learning Foundations, AWS Academy</strong><br />
          January 18, 2024 - February 20, 2024
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>HR Intern, Lernx</strong><br />
          Offer Letter Received: June 20, 2023<br />
          Certificate of Internship Received: August 25, 2023
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Programming in Java, NPTEL</strong><br />
          July 24, 2023 - August 07, 2023
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Create and Manage Cloud Resources, Google Cloud</strong><br />
          March 6, 2024
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Internships;
