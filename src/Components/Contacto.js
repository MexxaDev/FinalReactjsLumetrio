import React from "react";


export default class Contacto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleDatos= () => {
        const btnEnviar = document.querySelector('#btnEnviar');
        const nombre = document.getElementById('nombre');
        const correo = document.getElementById('correo');
        const mensaje = document.getElementById('mensaje');
        let WhatsappMensaje;
        WhatsappMensaje = `https://api.whatsapp.com/send?phone=543496578813&text=Nombre:%20${nombre.value}%20correo:%20${correo.value}%20mensaje:%20${mensaje.value}`
        btnEnviar.href = WhatsappMensaje;
    }

    render() {
        return (
          <>
            <div className="SectionContacto">
                <form action="">
                    <h3>Formulario de contacto</h3>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                        <input  id="nombre" type="text" />
                    <div>
                        <label htmlFor="correo">Correo</label>
                    </div>
                        <input  id="correo" type="mail" />
                    <div>
                        <label htmlFor="mensaje">Mensaje</label>
                    </div>
                        <textarea  name="" id="mensaje" cols="20" rows="10"></textarea>
                    <div>
                    <a onClick={this.handleDatos} href="" id="btnEnviar">Enviar</a>
                    </div>
                </form>
            </div>
          </>
        );
      }
    }