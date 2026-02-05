import { useState, useEffect } from "react";
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faGripLines, faTimes, } from "@fortawesome/free-solid-svg-icons";

export default function Header({ handleScroll }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleClick = (id) => {
        handleScroll(id);
        setMenuOpen(false);
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="navLinks">
            <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
                <div className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faGripLines} size="lg" />
                </div>

                <ul className={`nav-left ${menuOpen ? 'open' : ''}`}>
                    <li className='nav-item' onClick={() => handleClick("home")}> Home</li>
                    <li className='nav-item' onClick={() => handleClick("about")}>Objectives</li>
                </ul>

                <div className="logo">
                    <FontAwesomeIcon icon={faBolt} size="2x" color="#23c483"/>
                </div>

                <ul className="nav-right">
                    <li className='nav-item' onClick={() => handleClick("contact")}>Hit me</li>
                </ul>
            </div>
        </nav>
    );
}
