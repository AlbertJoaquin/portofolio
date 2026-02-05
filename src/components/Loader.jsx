import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Loader = ({ onFinish }) => {
    const [slideUp, setSlideUp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideUp(true);
            setTimeout(() => {
                onFinish();
            }, 1800);
        }, 500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`loader-container ${slideUp ? 'slide-up' : ''}`}>
            <FontAwesomeIcon icon={faBolt} size="3x" color="#23c483" className="loader-icon"/>
        </div>
    );
};

export default Loader;
