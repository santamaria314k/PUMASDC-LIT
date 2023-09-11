import { LitElement ,html } from "lit-element";

import stylelogStyles from "./stylelog-element.js";


export class LoginElement extends LitElement{

    static get styles(){return[stylelogStyles]}
        
       
      


render(){
    return html`
    


    <stylelog-element></stylelog-element>



    
     <head-element></head-element>
     <stylelog-element> </stylelog-element>

    <form action="">
    <h1>PUMAS DC</h1>


    <inputs-element></inputs-element>


    </form>

    
    
    
    
    
    
    `
    
   
    




 
}


}

customElements.define('login-element',LoginElement);