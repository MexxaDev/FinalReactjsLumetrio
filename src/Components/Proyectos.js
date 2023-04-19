import React from "react";

export default class Proyectos extends React.Component{
    constructor(props){
        super(props);

    
    }
    render() {
        return (
            <div className="SectionProyecto">
                <div target ="_blank" id="Proyectos" className="componentProject">
                    <a target="_blank" href="https://sanyetic-music.vercel.app/">
                        <div className="componentPorject__contImg">
                                <img className="componentPorject__contImg--img" alt="x" src="/img/sanyetic.png" />
                            </div>
                            <div className="componentPorject__contTitle">
                                <h3 className="componentPorject__contTitle--title">Sanyetic Music</h3>
                            </div>
                    </a>
                </div>
                <div id="Proyectos" className="componentProject">
                    <a target="_blank" href="https://desktop-seven.vercel.app/">
                        <div className="componentPorject__contImg">
                            <img className="componentPorject__contImg--img" alt="x" src="/img/Desktop.png" />
                        </div>
                        <div className="componentPorject__contTitle">
                            <h3 className="componentPorject__contTitle--title">Desktop</h3>
                        </div>
                    </a>
                </div>
                <div id="Proyectos" className="componentProject">
                    <a target="_blank" href="https://nahuelbeeguer.vercel.app/">
                        <div className="componentPorject__contImg">
                            <img className="componentPorject__contImg--img" alt="x" src="/img/portfolio.png" />
                        </div>
                        <div className="componentPorject__contTitle">
                            <h3 className="componentPorject__contTitle--title">Portfolio</h3>
                        </div>
                    </a>
                </div>
            </div>

        )
    }
}