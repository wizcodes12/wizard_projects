import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import profilePic from './test_1.jpeg';
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shineAnimation = keyframes`
  to {
    background-position: 200% center;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(137, 207, 240, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(137, 207, 240, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(137, 207, 240, 0);
  }
`;

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(to bottom, #1a1a1a, #000000);
  }
`;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  animation: ${fadeIn} 1s ease-in;
`;

const ProfilePicture = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
   background-image: url(${profilePic});
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px rgba(137, 207, 240, 0.5);
  border: 4px solid #89CFF0;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(137, 207, 240, 0.8);
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #89CFF0;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #89CFF0;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

const StyledButton = styled(Link)`
  padding: 15px 30px;
  font-size: 18px;
  color: #89CFF0;
  background-color: transparent;
  border: 2px solid #89CFF0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  &:hover {
    background-color: rgba(137, 207, 240, 0.1);
    box-shadow: 0 0 10px #89CFF0;
  }
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 16px;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  right: 10px;
  text-align: right;
`;

const ShiningText = styled.span`
  display: inline-block;
  font-size: 1rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  background-size: 200% 100%;
  color: #D3D3D3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shineAnimation} 3s linear infinite;
  font-family: 'Arial', sans-serif;
`;

const LandingPage = () => {
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = "Explore my journey through code and creativity.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullSubtitle.length) {
        setSubtitle(prev => prev + fullSubtitle.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <LandingContainer>
        <ProfilePicture />
        <Title>Welcome to My Projects site</Title>
        <Subtitle>{subtitle}</Subtitle>
        <StyledButton to="/showcase">Showcase Projects</StyledButton>
      </LandingContainer>
      <Footer>
        <ShiningText>WizCodes © 2024</ShiningText>
      </Footer>
    </>
  );
};

export default LandingPage;