import "/src/styles/navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                Living on the Dole
            </a>
            <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
                {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li><Link to="/" onClick={() => { setIsNavExpanded(!isNavExpanded); }} id="home">Home</Link></li>
                    <li><Link to="/about" onClick={() => { setIsNavExpanded(!isNavExpanded); }} id="about">About</Link></li>
                    <li><Link to="/projects" onClick={() => { setIsNavExpanded(!isNavExpanded); }} id="projects">Projects</Link></li>
                    <li><Link to="/resume" onClick={() => { setIsNavExpanded(!isNavExpanded); }} id="resume">Resume</Link></li>
                    <li><Link to="/credentials" onClick={() => { setIsNavExpanded(!isNavExpanded); }} id="credentials">Credentials</Link></li>
                    <li><Link to="/technologies" onClick={() => { setIsNavExpanded(!isNavExpanded); }} id="technologies">Technologies</Link></li>
                    <li><Link to="/contact" onClick={() => { setIsNavExpanded(!isNavExpanded); }} id="contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
