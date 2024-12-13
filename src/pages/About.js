import React from "react";
import Resume from "./Resume"
import styled from "styled-components";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";


const AboutWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: #f9f9f9;
    color: #333;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #6a4c93;
`;

const Bio = styled.div`
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    font-size: 1.2rem;
    text-align: center;
`;

const TechStack = styled.div`
    margin: 4rem 0;
    text-align: center;
`;

const TechIcons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1rem;
    font-size: 3rem;
    color: #6a4c93;

    & > * {
        transition: transform 0.3s ease;
    }

    & > *:hover {
        transform: scale(1.2);
    }
`;

const ExperienceSection = styled.div`
    margin-top: 4rem;
`;

const ExperienceCard = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 1.5rem;
        color: #6a4c93;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: #555;
        margin-bottom: 0.5rem;
    }

    ul {
        padding-left: 20px;
    }

    li {
        font-size: 1rem;
        margin-bottom: 0.3rem;
    }
`;

const About = () => {
    return (
        <AboutWrapper>
            <SectionTitle>About Me</SectionTitle>

            <Bio>
                <p>
                    Hi, I'm [Your Name]! I’m a passionate web developer with a love for crafting
                    modern, responsive websites. I specialize in front-end technologies and enjoy
                    bringing ideas to life. In my free time, I love reading, hiking, and exploring
                    the latest tech trends.
                </p>
            </Bio>

            <TechStack>
                <h3>My Tech Stack</h3>
                <TechIcons>
                    <FaReact title="React" />
                    <SiJavascript title="JavaScript" />
                    <FaNodeJs title="Node.js" />
                    <FaPython title="Python" />
                    <SiHtml5 title="HTML5" />
                    <SiCss3 title="CSS3" />
                </TechIcons>
            </TechStack>

            <ExperienceSection>
                <h3>Professional Experience</h3>
                <ExperienceCard>
                    <h3>Front-End Developer</h3>
                    <p>Company XYZ | Jan 2023 - Present</p>
                    <ul>
                        <li>Developed responsive websites using React and JavaScript.</li>
                        <li>Collaborated with designers to create seamless UI/UX experiences.</li>
                        <li>Optimized website performance, achieving a 20% faster load time.</li>
                    </ul>
                </ExperienceCard>
                <ExperienceCard>
                    <h3>Freelance Developer</h3>
                    <p>Self-Employed | 2020 - 2022</p>
                    <ul>
                        <li>Built custom websites for small businesses using modern frameworks.</li>
                        <li>Implemented SEO strategies to improve client visibility online.</li>
                        <li>Delivered projects on time, exceeding client expectations.</li>
                    </ul>
                </ExperienceCard>
            </ExperienceSection>
            <Resume />
        </AboutWrapper>

    );
};

export default About;
