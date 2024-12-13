import React from "react";
import styled from "styled-components";

const ResumeWrapper = styled.section`
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

const ResumeContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const ResumeLink = styled.a`
    display: inline-block;
    margin-top: 1.5rem;
    padding: 1rem 2rem;
    background-color: #6a4c93;
    color: #fff;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #533578;
    }
`;

const EducationList = styled.ul`
    margin-top: 2rem;
    list-style: none;
    padding: 0;
    text-align: left;

    li {
        margin-bottom: 1.5rem;
        font-size: 1.2rem;

        span {
            display: block;
            font-weight: bold;
        }
    }
`;

const Resume = () => {
    return (
        <ResumeWrapper>
            <SectionTitle>Resume</SectionTitle>
            <ResumeContent>
                <p>
                    Interested in learning more about my professional background? Download
                    my updated resume to explore my skills, experience, and education in
                    detail.
                </p>
                <ResumeLink href="/path-to-your-resume.pdf" download>
                    Download Resume
                </ResumeLink>

                <h3 style={{ marginTop: "3rem", color: "#6a4c93" }}>Education & Certifications</h3>
                <EducationList>
                    <li>
                        <span>Bachelor's Degree in Software Engineering</span>
                        Hashemite University, 2023
                    </li>
                    <li>
                        <span>React Certification</span>
                        Coursera, 2024
                    </li>
                    <li>
                        <span>Full-Stack Web Development Bootcamp</span>
                        Orange Coding Academy, 2024
                    </li>
                </EducationList>
            </ResumeContent>
        </ResumeWrapper>
    );
};

export default Resume;
