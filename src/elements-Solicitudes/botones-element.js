import { LitElement,html } from "lit-element";

import styleSolicitudes from "./style-solicitudes";

    

    
   


export class BotonesElement extends LitElement{ 
    
    static get styles(){return[styleSolicitudes]}

render(){
    return html`

    
<!-- in     -->
<div  class="principio">
    <br>
<h1 class="solicitud">Solicitudes</h1>
<br>
<p>Por favor seleccione el tipo de solicitud</p>
<br>
<select id="miSelect"><option>........................</option></select>

</div>


<!--PRINCIPAL-->

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

customElements.define('botones-element',BotonesElement);