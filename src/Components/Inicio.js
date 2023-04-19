import React from "react";
export default class Inicio extends React.Component{
    render(){
        return(
            <div id="Inicio" className="SectionInicio">
{                <div className="SectionInicio__Card">
                    <img className="SectionInicio__Card__Home--logo" src="img/profile.jpg" />
                    <div className="SectionInicio__Card_Home--contInfoMe">
                        <h2>Nahuel A. Beeguer</h2>
                        <h3>Front End Developer</h3>
                    </div>
                    <div className="SectionInicio__Card_Home--contRedes">
                        <a href="https://www.linkedin.com/in/nahuel-beeguer-28452a192/">
                            <svg xmlns="http://www.w3.org/2000/svg" class=" iconic icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                <line x1="8" y1="11" x2="8" y2="16"></line>
                                <line x1="8" y1="8" x2="8" y2="8.01"></line>
                                <line x1="12" y1="16" x2="12" y2="11"></line>
                                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg>
                        </a>

                        <a href="https://github.com/mexxadev">
                            <svg xmlns="http://www.w3.org/2000/svg" class=" iconic icon icon-tabler icon-tabler-brand-github" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/nahuel._beeguer/">                    
                            <svg xmlns="http://www.w3.org/2000/svg" class=" iconic icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                                <circle cx="12" cy="12" r="3"></circle>
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                            </svg>
                        </a>

                        <a href="https://twitter.com/nahuel_beeguer">
                            <svg xmlns="http://www.w3.org/2000/svg" class=" iconic icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                            </svg>
                        </a>

                    </div>
                </div>
}       
            </div>
        )
    }
}