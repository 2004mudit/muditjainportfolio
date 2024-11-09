import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation'; // Ensure casing is correct
import Profile from './components/Profile'; // Ensure casing is correct
import About from './components/About'; // Ensure casing is correct
import Projects from './components/Project'; // Ensure casing is correct
import Internships from './components/Internship'; // Ensure casing is correct
import Education from './components/Education'; // Ensure casing is correct

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
