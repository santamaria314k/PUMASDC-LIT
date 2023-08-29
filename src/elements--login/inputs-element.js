import { LitElement,html } from "lit-element";



export class InputsElement extends LitElement{
render(){
    return html`
    
    <link rel="stylesheet" href="../CSS/LOGIN.css">

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