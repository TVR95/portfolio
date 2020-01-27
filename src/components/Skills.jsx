import React from "react";

import reactLogo from "../resources/react.svg"
import nodeLogo from "../resources/nodejs-new-pantone-black.png";
import angularLogo from "../resources/angular.svg";
import springLogo from "../resources/spring-by-pivotal.png";
import mongodbLogo from "../resources/MongoDB_Logo_FullColorBlack_RGB.png";
import mysqlLogo from "../resources/mysql.svg";

function Skills() {
    return (
        <section id="skills">
            <div className="skills">
                <h1>Skills</h1>
                <div className="grid-row">
                    <div className="frontend">
                        <h2>Frontend</h2>
                    </div>
                    <div className="backend">
                        <h2>Backend</h2>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="frontend">
                        <img className="photoSkill" src={reactLogo} alt="react"/>
                    </div>
                    <div className="backend">
                        <img className="photoSkill" src={nodeLogo} alt="node"/>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="frontend">
                        <img className="photoSkill" src={angularLogo} alt="react"/>
                    </div>
                    <div className="backend">
                        <img className="photoSkill" src={springLogo} alt="node"/>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="backend">
                        <img className="photoSkill" src={mongodbLogo} alt="node"/>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="frontend">
                    </div>
                    <div className="backend">
                        <img className="photoSkill" src={mysqlLogo} alt="node"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;