import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ShowcasePage from './pages/ShowcasePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './pages/Footer';
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/projects/:category" element={<ProjectsPage />} />
        <Route path="/projects/:category/:projectId" element={<ProjectDetailPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;


// administrator