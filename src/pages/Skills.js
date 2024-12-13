import React from "react";
import styled from "styled-components";

const SkillsWrapper = styled.section`
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

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    margin-top: 2rem;
`;

const SkillCategory = styled.div`
    flex: 1;
    min-width: 300px;
`;

const SkillTitle = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
`;

const SkillList = styled.ul`
    list-style: none;
    padding: 0;

    li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        img {
            width: 24px;
            height: 24px;
            margin-right: 0.8rem;
        }

        span {
            font-size: 1.2rem;
            color: #555;
        }
    }
`;

const SkillBarWrapper = styled.div`
    margin-bottom: 1rem;
`;

const SkillBar = styled.div`
    background: #ddd;
    border-radius: 8px;
    overflow: hidden;
    height: 10px;

    div {
        height: 100%;
        width: ${(props) => props.level}%;
        background: #6a4c93;
        transition: width 0.3s ease;
    }
`;

const Skills = () => {
    const technicalSkills = [
        { name: "React", icon: "https://via.placeholder.com/24", level: 90 },
        { name: "JavaScript", icon: "https://via.placeholder.com/24", level: 85 },
        { name: "HTML5", icon: "https://via.placeholder.com/24", level: 95 },
        { name: "CSS3", icon: "https://via.placeholder.com/24", level: 90 },
        { name: "Git", icon: "https://via.placeholder.com/24", level: 80 },
        { name: "Node.js", icon: "https://via.placeholder.com/24", level: 75 },
    ];

    const softSkills = [
        { name: "Problem-Solving" },
        { name: "Teamwork" },
        { name: "Communication" },
        { name: "Adaptability" },
        { name: "Creativity" },
    ];

    return (
        <SkillsWrapper>
            <SectionTitle>Skills</SectionTitle>

            <SkillsContainer>
                {/* Technical Skills */}
                <SkillCategory>
                    <SkillTitle>Technical Skills</SkillTitle>
                    {technicalSkills.map((skill, index) => (
                        <SkillBarWrapper key={index}>
                            <SkillList>
                                <li>
                                    <img src={skill.icon} alt={skill.name} />
                                    <span>{skill.name}</span>
                                </li>
                            </SkillList>
                            <SkillBar level={skill.level}>
                                <div></div>
                            </SkillBar>
                        </SkillBarWrapper>
                    ))}
                </SkillCategory>

                {/* Soft Skills */}
                <SkillCategory>
                    <SkillTitle>Soft Skills</SkillTitle>
                    <SkillList>
                        {softSkills.map((skill, index) => (
                            <li key={index}>
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </SkillList>
                </SkillCategory>
            </SkillsContainer>
        </SkillsWrapper>
    );
};

export default Skills;
