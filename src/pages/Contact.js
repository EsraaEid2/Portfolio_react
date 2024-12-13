import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";


const ContactWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: #f9f9f9;
    color: #333;
    text-align: center;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #6a4c93;
`;

const ContactForm = styled.form`
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    resize: none;
`;

const SubmitButton = styled.button`
    background-color: #6a4c93;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #533578;
    }
`;

const SocialLinks = styled.div`
    margin-top: 3rem;
`;

const SocialLink = styled.a`
    margin: 0 1rem;
    color: #6a4c93;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
        color: #533578;
    }
`;

const Email = styled.p`
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #6a4c93;
    font-weight: bold;
`;

const Contact = () => {
    return (
        <ContactWrapper id="contact">
            <SectionTitle>Contact Me</SectionTitle>
            <ContactForm>
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea rows="5" placeholder="Your Message" required></Textarea>
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
            <SocialLinks>
                <h3>Connect with me:</h3>
                <SocialLink href="https://www.linkedin.com/in/your-profile" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </SocialLink>
                <SocialLink href="https://github.com/your-profile" target="_blank">
                    <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink href="https://twitter.com/your-profile" target="_blank">
                    <i className="fab fa-twitter"></i>
                </SocialLink>
            </SocialLinks>
            <Email>Email: <a href="mailto:esraa.eidd2@gmail.com" target="_blank">esraa.eidd2@gmail.com</a></Email>
        </ContactWrapper>
    );
};

export default Contact;
