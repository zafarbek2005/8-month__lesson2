import { BiChevronUp } from "react-icons/bi"; 
import React, { useState, useEffect } from 'react';
import './backtop.scss'; 

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        showButton && (
            <button className="back-to-top" onClick={scrollToTop}>
                <BiChevronUp />
            </button>
        )
    );
};

export default BackToTop;
