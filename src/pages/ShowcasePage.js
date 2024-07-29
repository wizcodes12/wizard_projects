import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: black;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
`;

const ProjectBlock = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #2a2a2a;
  color: #89CFF0;
  text-decoration: none;
  font-size: 18px;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(137, 207, 240, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #89CFF0, #2a2a2a);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ProjectTitle = styled.span`
  z-index: 1;
  font-weight: 600;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 18px;
  border: none;
  border-radius: 20px 0 0 20px;
  width: 250px;
  height:45px;
  background-color: rgba(128, 128, 128, 0.2);
  color: #fff;
  &:focus {
    outline: none;
    background-color: rgba(128, 128, 128, 0.3);
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 18px;
  border: none;
  border-radius: 0 20px 20px 0;
  background-color: rgba(128, 128, 128, 0.2);
  color: #89CFF0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }

  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: #89CFF0;
  text-align: center;
  margin-top: 1rem;
`;

const categories = [
  'MERN Stack',
  'React Apps',
  'Django',
  'React Native',
  'Android (Java)',
  'Android (Kotlin)',
  'Android (Flutter)',
  'MEAN Stack',
  'DSA Projects',
];

const ShowcasePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = categories.filter(category =>
      category.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredCategories(filtered);
    setShowError(filtered.length === 0);
  }, [searchTerm]);

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search categories..."
        />
        <SearchButton onClick={() => {}}>
          <FaSearch />
        </SearchButton>
      </SearchContainer>
      <ShowcaseContainer>
        {filteredCategories.map((category, index) => (
          <ProjectBlock key={category} to={`/projects/${category}`} index={index}>
            <ProjectTitle>{category}</ProjectTitle>
          </ProjectBlock>
        ))}
      </ShowcaseContainer>
      {showError && <ErrorMessage>Oops!! Projects for the current language are added in stack list. They would add up soon.</ErrorMessage>}
    </>
  );
};

export default ShowcasePage;
