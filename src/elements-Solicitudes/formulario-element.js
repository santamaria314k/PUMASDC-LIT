import { LitElement,html } from "lit-element";

import styleSolicitudes from "./style-solicitudes";

    

    
   


export class FormularioElement extends LitElement{
    
    static get styles(){return[styleSolicitudes]}

render(){
    return html`
    
    
    <!-- inicio del formulario -->
<form action="">

<div class="impu">
<div class="block1">
<input  placeholder="Elemento a comprar" type="text">
<br>
<select id="miSelect"><option>Unidades a comprar</option></select>

</div>

<div class="blocked">
    <input  placeholder="Valor de la compra" type="text">
<br>
    <input  placeholder="Fecha de la compra" type="text">

</div>
<input class="descripcion" placeholder="Descripción" type="text">

<button  class="boton">Gestionar</button>



</div>


</form>
    
    
    `
    
 
}


}

customElements.define('formulario-element',FormularioElement);