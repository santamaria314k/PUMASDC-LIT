import { LitElement,html } from "lit-element";


import styleActas from "./style-actas";

    




export class TablaElement extends LitElement{   
       static get styles(){return[styleActas]}

render(){
    return html`
    
    
<!-- in     -->
<div  class="principio">
  <br>
<h1 class="solicitud">Actas</h1>
<br>
<p>Por favor seleccione el año a consultar  .  Por favor seleccione el mes a consultar</p>
<br>
<div class="cel">
<select id="miSelect"><option>........................</option></select>

<select id="miSelect"><option>........................</option></select>
</div>

</div>




<div class="bord">
  <table>
    <tr>
      <th>N Referencia</th>
      <th>Titulo</th>
      <th>Fecha</th>
      <th>Url detalle</th>
    </tr>
    <tr>
      <td></td>
      <td>  </td>
      <td>  </td>
      <td>  </td>
    </tr>
    <tr>
      <td>  </td>
      <td>  </td>
      <td>  </td>
      <td>  </td>
    </tr>
    <tr>
      <td>  </td>
      <td>  </td>
      <td>  </td>
      <td>  </td>
    </tr>
    <tr>
      <td>  </td>
      <td>  </td>
      <td>  </td>
      <td>  </td>
    </tr>
    <tr>
      <td>  </td>
      <td>  </td>
      <td>  </td>
      <td>  </td>
    </tr>
    <tr>
      <td>  </td>
      <td>  </td>
      <td>  </td>
      <td>  </td>
    </tr>
    <tr>
      <td>  </td>
      <td>  </td>
      <td>  </td>
      <td>  </td>
    </tr>
  </table>
</div>






    
    `
    
 
}


}

customElements.define('tabla-element',TablaElement);