import React from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: #fff;
    color: #333;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #6a4c93;
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

const ProjectCard = styled.div`
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ProjectContent = styled.div`
    padding: 1.5rem;

    h3 {
        font-size: 1.5rem;
        color: #6a4c93;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: #555;
        margin-bottom: 1rem;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

const Button = styled.a`
    flex: 1;
    padding: 0.8rem;
    text-align: center;
    color: #fff;
    background-color: #6a4c93;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5a3c83;
    }
`;

const Projects = () => {
    const projects = [
        {
            title: "E-commerce Website",
            description:
                "A modern e-commerce platform with features like product search, cart management, and user authentication.",
            image: "https://via.placeholder.com/300x200",
            liveLink: "https://example.com",
            codeLink: "https://github.com/your-repo",
        },
        {
            title: "Projects Website",
            description:
                "A personal Projects to showcase my skills, projects, and professional experience.",
            image: "https://via.placeholder.com/300x200",
            liveLink: "https://example.com",
            codeLink: "https://github.com/your-repo",
        },
        {
            title: "Task Management App",
            description:
                "A productivity app to help users manage their daily tasks and set reminders.",
            image: "https://via.placeholder.com/300x200",
            liveLink: "https://example.com",
            codeLink: "https://github.com/your-repo",
        },
    ];

    return (
        <ProjectsWrapper>
            <SectionTitle>Projects</SectionTitle>

            <ProjectGrid>
                {projects.map((project, index) => (
                    <ProjectCard key={index}>
                        <ProjectImage src={project.image} alt={project.title} />
                        <ProjectContent>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <ButtonGroup>
                                <Button href={project.liveLink} target="_blank">
                                    Live Site
                                </Button>
                                <Button href={project.codeLink} target="_blank">
                                    Code
                                </Button>
                            </ButtonGroup>
                        </ProjectContent>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </ProjectsWrapper>
    );
};

export default Projects;
