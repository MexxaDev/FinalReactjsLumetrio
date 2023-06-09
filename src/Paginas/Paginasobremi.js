import React from "react";

export default class Paginasobremi extends React.Component {
    render() {
        return (

        <>
        <div id="Sobremi" className="SectionSobremi">
            <div className="SectionSobremi--card">
                <img alt="x" className="SectionSobremi--card__img" src="img/photo.jfif" />
                <div className="SectionSobremi--card__contInfo">
                    <h2 className="SectionSobremi--card__contInfo--title" >Sobre mi</h2>
                    <p>¡Hola! Soy un desarrollador front-end. Estoy practicando y estudiando nuevas tecnologías para mejorar en el área.</p>
                </div>
                <div className="SectionSobremi--card__contSkills">
                    <svg xmlns="http://www.w3.org/2000/svg" xlinkTitle="HTML" class="icon icon-tabler icon-tabler-brand-html5" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-css3" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                        <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                        <path d="M7.5 8h3v8l-2 -1"></path>
                        <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-sass" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 10.523c2.46 -.826 4.002 -.826 4.002 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-bootstrap" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path>
                        <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2"></path>
                        <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-git" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="16" cy="12" r="1"></circle>
                        <circle cx="12" cy="8" r="1"></circle>
                        <circle cx="12" cy="16" r="1"></circle>
                        <path d="M12 15v-6"></path>
                        <path d="M15 11l-2 -2"></path>
                        <path d="M11 7l-1.9 -1.9"></path>
                        <path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-php" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <ellipse cx="12" cy="12" rx="10" ry="9"></ellipse>
                        <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
                        <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
                        <path d="M12 7.5l-1 5.5"></path>
                        <path d="M11.6 10h2.4l-.5 3"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                        <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
                        <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-react-native" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgba(61, 48, 112, 0.469)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                        <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                        <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                        <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                        <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                        <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                        <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
                    </svg>
                </div>
            </div>
            </div>
            </>
        )
    }
}