import { LitElement,html } from "lit-element";


import styleMenu from "./style-menu";


    
export class ContentsElement extends LitElement{ 
    
       static get styles(){return[styleMenu]}

render(){
    return html` 
    
    
    



    <div class="absolut">

<div class="unifi">



    <!-- contenedor #1 -->
    <div  class="content01">
    <h1>Actas</h1>
    <img src="../IMG/1.PNG">

    <button  class="boton">Gestionar</button>

    </div>
    <!-- contenedor #2 -->
    <div  class="content2">
    <h1>Certificados</h1>
    <img src="../IMG/2.PNG">
    <button  class="boton">Gestionar</button>

    </div>
    <!-- contenedor #3 -->
    <div  class="content3">
     <h1>Reuniones</h1>
     <img src="../IMG/3.PNG">
     <button  class="boton">Gestionar</button>
    </div>


</div>

<div class="unifi2">

    <!-- contenedor #4 -->
    <div  class="content4">
    <h1>Asistencia</h1>
    <img src="../IMG/4.PNG">
    <button  class="boton">Gestionar</button>

    </div>
    <!-- contenedor #5 -->
    <div  class="content5">
    <h1>Comunicasion</h1>
    <img src="../IMG/5.PNG">

    <button  class="boton">Gestionar</button>

    </div>
    <!-- contenedor #6 -->
   <div  class="content6">
    <h1>Estado de cuenta</h1>
    <img src="../IMG/5.PNG">
    <button  class="boton">Gestionar</button>

   </div>

</div>

</div>
    
    
    
    
    
    
    
    
    
    `
    
 
}


}

customElements.define('contents-element',ContentsElement);