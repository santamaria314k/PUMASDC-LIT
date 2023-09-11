import { LitElement,html } from "lit-element";

import StylepenElement from "./stylepend-element"

export class TablapenElement extends LitElement{

    static get styles(){return[StylepenElement]}

render(){
    return html`
    



    <!-- in     -->
<div  class="principio">
  <br>
<h1 class="solicitud">Pendientes</h1>
<br>

<br>


</div>

  


<div class="bord">
  <table>
    <tr>
      <th>N° pendiente </th>
      <th>Descripción</th>
      <th>Fecha</th>
      <th>Acciones</th>
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

customElements.define('tablapen-element',TablapenElement);