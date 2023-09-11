import { LitElement,html } from "lit-element";

import styleMenu from "./style-menu";

export class MenuElement extends LitElement{
    
    static get styles(){return[styleMenu]}

render(){
    return html`

    


    <header-element>   </header-element> 
    <menu-lateral> </menu-lateral>
    
    <contents-element></contents-element>



    `
    
 
}


}

customElements.define('menu-element',MenuElement);