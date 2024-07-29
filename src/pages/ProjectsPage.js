import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  background-color: black;
  animation: ${fadeIn} 0.5s ease-in;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const CategoryTitle = styled.h1`
  color: #89CFF0;
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${slideIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(137, 207, 240, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 150px;
  background-color: #3a3a3a;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const ProjectInfo = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  color: #89CFF0;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #89CFF0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ProjectsPage = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate loading projects from an API
    setTimeout(() => {
      setProjects([
        { id: 1, title: 'Project One', description: 'A brief description of Project One', image: 'https://via.placeholder.com/300x150.png?text=Project+One' },
        { id: 2, title: 'Project Two', description: 'A brief description of Project Two', image: 'https://via.placeholder.com/300x150.png?text=Project+Two' },
        { id: 3, title: 'Project Three', description: 'A brief description of Project Three', image: 'https://via.placeholder.com/300x150.png?text=Project+Three' },
      ]);
    }, 500);
  }, [category]);

  return (
    <ProjectsContainer>
      <CategoryTitle>{category} Projects</CategoryTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} to={`/projects/${category}/${project.id}`} index={index}>
            <ProjectImage image={project.image} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default ProjectsPage;