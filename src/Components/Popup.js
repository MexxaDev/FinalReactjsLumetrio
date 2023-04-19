import React from "react";
export default class Popup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mostrarTextopopup: true,
            mostrarCardpop : true,
            mostrarpop : true,
        }
    }
    popMini = () => {
        this.setState({mostrarTextopopup: false});
        this.setState({mostrarCardpop:false});
    }
    popMxi = () => {
        this.setState({mostrarTextopopup: true});
        this.setState({mostrarCardpop:true});
    }
    popExit = () => {
        this.setState({mostrarpop: false}); 
    }
    render(){
        return(
            <div id="popup" className="popup" style={{
                display: this.state.mostrarpop ? 'block' : 'none' ,
                height:  this.state.mostrarCardpop ? '11em' : '0em',
                border:  this.state.mostrarCardpop ? '1px solid rgba(204, 187, 187, 0.062)' : 'none'}}>
                <div class="popup--contenedorBtnes">
                        <div onClick={this.popExit} className="popup--contenedorBtnes__circle-1"></div>
                        <div onClick={this.popMxi} className="popup--contenedorBtnes__circle-2"></div>
                        <div onClick={this.popMini} id="popMini" className="popup--contenedorBtnes__circle-3"></div>
                </div>
                <div id="popupTxt" className="popup--contenedorText " style={{ display: this.state.mostrarTextopopup ? 'block' : 'none'}}>
                        <p   className="popup--contenedorText__parrafo">
                            Tambien ayudo a personas que esten empezando en el mundo del Desarrollo Web. Podes contactarme a travez de 
                                <a className="linkPopup" href="https://www.superprof.com.ar/crea-publica-primera-pagina-web-html-css-tus-primeros-pasos-desarrollo-web.html"> Superprof</a> 
                        </p>
                </div>
            </div>
        )
    }
}