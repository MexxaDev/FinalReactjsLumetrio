import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/sobremi">Sobre mí</Link>
          </li>
          <li>
            <Link to="/proyecto">Proyectos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/consumoApi">API Dogs</Link>
          </li>
        </ul>
            </nav>
        )
    }
}