import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #a594f9, #d7b0f9);
    color: white;
`;

const HeroSection = styled.div`
    max-width: 800px;
`;

const Headline = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.2;
`;

const SubHeading = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 400;
`;

const CTAButton = styled.a`
    display: inline-block;
    background: white;
    color: #6a4c93;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    &:hover {
        background-color: #f1e6ff;
        transform: scale(1.05);
    }
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

const Home = () => {
    return (
        <HomeWrapper>
            <HeroSection>
                <ProfileImage
                    src="https://via.placeholder.com/150" // Replace with your image URL
                    alt="Profile"
                />
                <Headline>Hi, I'm <strong>Esra'a Eid</strong></Headline>
                <SubHeading>
                    A passionate web developer creating modern, responsive websites using React,
                    JavaScript, and more.
                </SubHeading>
                <CTAButton href="#projects">Check Out My Projects</CTAButton>
            </HeroSection>
        </HomeWrapper>
    );
};

export default Home;
