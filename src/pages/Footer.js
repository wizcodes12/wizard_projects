import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #89CFF0;
  text-align: center;
  padding: 1.5rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
  font-size: 14px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>Email: <a href="mailto:divyapatel12079@gmail.com" style={{ color: '#89CFF0', textDecoration: 'none' }}>divyapatel12079@gmail.com</a> & <a href="mailto:wizcodes12@gmail.com" style={{ color: '#89CFF0', textDecoration: 'none' }}>wizcodes12@gmail.com</a></FooterText>
    <FooterText>Phone: +91 7862036533</FooterText>
    <FooterText>&copy; 2024 WizCodes. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
