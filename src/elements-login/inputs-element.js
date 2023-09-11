import { LitElement,html } from "lit-element";

import stylelogStyles from "./stylelog-element.js";


export class InputsElement extends LitElement{

    static get styles(){return[stylelogStyles]}

    

    
render(){
    return html`
    

    <br>
    <input placeholder="Usuario" type="text">
    <br><br><br>
    <input placeholder="Contraseña" type="text">
    <br>
    <button class="boton">INGRESAR</button>

    
    
    `
    
 
}


}

customElements.define('inputs-element',InputsElement);