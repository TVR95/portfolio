import React from "react";

function Header() {
    return (
        <section id="top">
            <header>
                <div className="navigation">
                    <ul>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        </section>
    );
}

export default Header;