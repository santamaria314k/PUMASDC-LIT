import { LitElement,html } from "lit-element";



import styleActas from "./style-actas";

    



export class ActasElement extends LitElement{  
      static get styles(){return[styleActas]}

render(){
    return html`
    
    <header-element>  </header-element>
    <menu-lateral>  </menu-lateral>
    <botontr-element>  </botontr-element>
    <tabla-element>  </tabla-element>
    


    
    `
    
 
}


}

customElements.define('actas-element',ActasElement);