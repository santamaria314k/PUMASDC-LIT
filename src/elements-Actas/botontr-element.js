import { LitElement,html } from "lit-element";


import styleActas from "./style-actas";

    




export class BotontrElement extends LitElement{   
    
    static get styles(){return[styleActas]}

render(){
    return html`
    
  

    <div  class="principal">
    <a href="Solicitudes.html">
    <div  class="one">
        <h3>📃.Solicitudes </h3>
    </div>
    </a>
    <a href="Actas.html">
    <div class="two">
        <h3>📃.Actas</h3>
    </div>
    </a>
    <a href="Pendientes.html">
    <div  class="tree">
        <h3 href="#">🔔.Pendientes</h3>
    </div>
    </a>
    </div>


    
    `
    
 
}


}

customElements.define('botontr-element',BotontrElement);