import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
    return (
        <section id="contact">
            <div className="contact">
                <h1>Contact me</h1>
                <h3>Media</h3>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/kamil-szczepanski-963796167/" target="_blank"><LinkedInIcon style={{ fontSize: 40 }} /></a>
                    <a href="https://github.com/TVR95/" target="_blank"><GitHubIcon style={{ fontSize: 40 }} /></a>
                </div>
                <h3>Phone Number</h3>
                <h4>+48 530305429</h4>
                <h3>E-mail</h3>
                <h4>kamil.szczepanski1@gmail.com</h4>
            </div>
        </section>
    );
}

export default Contact;