import { LitElement,html } from "lit-element";



export class MenuLateral extends LitElement{
render(){
    return html` 

    <link rel="stylesheet" href="../CSS/MENU.css">
    <script src="https://kit.fontawesome.com/713139cfd2.js" crossorigin="anonymous"></script>

    <!--menu general con los balones de futbol-->
    
    <div  class="content1">
        <br>
        <button  href="#" ><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Home</button>  
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Presidencia</button>
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Presidencia</button>
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Vice-precidencia</button>
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Secretaria</button>
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Tesoreria</button>
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Revisoria fiscal</button>
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Lista afiliados</button>
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i> Lista jugadores</button>
        <br>
        <button  href="#"><i class="fa-sharp fa-solid fa-football fa-rotate-270 fa-sm" style="color: #3f5a88;"></i>Lista coach’s</button>
        <br>
    </div>`
    
 
}


}

customElements.define('menu-lateral',MenuLateral);