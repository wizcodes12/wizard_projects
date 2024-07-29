import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ProjectDetailContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-in;
  background-color: black;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ProjectTitle = styled.h1`
  color: #89CFF0;
  margin-bottom: 1rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 2rem;
  line-height: 1.8;
  color: #89CFF0;
`;

const SectionTitle = styled.h2`
  color: #89CFF0;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #2a2a2a;
  border-radius: 4px;
  color: #89CFF0;
  animation: ${slideIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: 0 10px 30px rgba(137, 207, 240, 0.2);

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(137, 207, 240, 0.3);
  color: #1a1a1a;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(137, 207, 240, 0.5);
  }

  &:focus {
    outline: none;
  }

  ${props => props.left ? 'left: 20px;' : 'right: 20px;'}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ProjectDetailPage = () => {
  const { category, projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Demo images (replace with your actual project screenshots)
  const demoImages = [
    'https://via.placeholder.com/1000x400/1a1a1a/89CFF0?text=Project+Screenshot+1',
    'https://via.placeholder.com/1000x400/1a1a1a/89CFF0?text=Project+Screenshot+2',
    'https://via.placeholder.com/1000x400/1a1a1a/89CFF0?text=Project+Screenshot+3',
  ];

  useEffect(() => {
    // Simulate loading project details from an API
    setTimeout(() => {
      setProjectDetails({
        title: `${category} Project ${parseInt(projectId) + 1}`,
        description: 'This is a detailed description of the project. It includes information about the project\'s purpose, challenges faced during development, and the solutions implemented.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        features: ['User authentication', 'Real-time data updates', 'Responsive design', 'API integration'],
      });
    }, 500);
  }, [category, projectId]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === demoImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? demoImages.length - 1 : prevIndex - 1
    );
  };

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  return (
    <ProjectDetailContainer>
      <ProjectTitle>{projectDetails.title}</ProjectTitle>
      <ProjectDescription>{projectDetails.description}</ProjectDescription>
      
      <CarouselContainer>
        <CarouselImage src={demoImages[currentImageIndex]} alt={`Project screenshot ${currentImageIndex + 1}`} />
        <CarouselButton left onClick={prevImage}>
          <FaChevronLeft />
        </CarouselButton>
        <CarouselButton onClick={nextImage}>
          <FaChevronRight />
        </CarouselButton>
      </CarouselContainer>

      <SectionTitle>Technologies Used</SectionTitle>
      <List>
        {projectDetails.technologies.map((tech, index) => (
          <ListItem key={index} index={index}>{tech}</ListItem>
        ))}
      </List>
      <SectionTitle>Features</SectionTitle>
      <List>
        {projectDetails.features.map((feature, index) => (
          <ListItem key={index} index={index + projectDetails.technologies.length}>{feature}</ListItem>
        ))}
      </List>
    </ProjectDetailContainer>
  );
};

export default ProjectDetailPage;