import { LitElement,html } from "lit-element";

import styleMenu from "./style-menu";

    

export class HeaderElement extends LitElement{  
    
    static get styles(){return[styleMenu]}

render(){
    return html`
    
    
    
    
    <img src="../IMG/logousers.png" >

    
    
    
    `
    
 
}


}

customElements.define('header-element',HeaderElement);