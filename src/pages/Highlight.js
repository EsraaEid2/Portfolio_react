import React from "react";
import styled from "styled-components";

const highlights = [
    { img: "highlight1.jpg", caption: "Graduated with distinction from Orange Coding Academy" },
    { img: "highlight2.jpg", caption: "Completed a live project: Handmade Accessories Marketplace" },
    { img: "highlight3.jpg", caption: "Collaborated with a great team on GamifyTech" }
];

const HighlightsWrapper = styled.section`
    padding: 2rem;
    text-align: center;
`;

const Gallery = styled.div`
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    padding: 1rem;
`;

const HighlightCard = styled.div`
    flex: 0 0 300px;
    text-align: center;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const HighlightImage = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0;
`;

const Highlights = () => (
    <HighlightsWrapper>
        <h2>Highlights</h2>
        <Gallery>
            {highlights.map((highlight, index) => (
                <HighlightCard key={index}>
                    <HighlightImage src={highlight.img} alt={`Highlight ${index + 1}`} />
                    <p>{highlight.caption}</p>
                </HighlightCard>
            ))}
        </Gallery>
    </HighlightsWrapper>
);

export default Highlights;
