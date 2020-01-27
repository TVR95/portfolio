import React from "react";

import Coffee from "./Coffee";
import Crypto from "./Crypto";

function Projects() {
    return (
        <section id="projects">
            <div className="projects">
                <h1>Projects</h1>
                <div className="projects-thumbnails">
                    <a href="https://tvr95.github.io/coffee-demo/" target="_blank"><div className="coffee-thumbnail"></div></a>
                    <a href="https://tvr95.github.io/crypto-demo/" target="_blank"><div className="crypto-thumbnail"></div></a>
                </div>
            </div>
        </section>
    );
}

export default Projects;