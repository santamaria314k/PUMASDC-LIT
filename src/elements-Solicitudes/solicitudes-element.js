import { LitElement,html } from "lit-element";


import styleSolicitudes from "./style-solicitudes";

    

    
   

export class SolicitudesElement extends LitElement{
 static get styles(){return[styleSolicitudes]}

render(){
    return html`



    <header-element>  </header-element>
    <menu-lateral>  </menu-lateral>
    
    <botones-element> </botones-element>
    <formulario-element> </formulario-element>
    
    `
    
 
}


}

customElements.define('solicitudes-element',SolicitudesElement);