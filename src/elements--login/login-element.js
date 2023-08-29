import { LitElement,css,html } from "lit-element";


export class LoginElement extends LitElement{
render(){
    return html`
    



    <link rel="stylesheet" href="../CSS/LOGIN.css">


    
     <head-element></head-element>


    <form action="">
    <h1>PUMAS DC</h1>


    <inputs-element></inputs-element>


    </form>

    
    
    
    
    
    
    `
    
 
}


}

customElements.define('login-element',LoginElement);