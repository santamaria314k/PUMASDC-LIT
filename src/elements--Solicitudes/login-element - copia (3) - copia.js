import { LitElement,html } from "lit-element";



export class LoginElement extends LitElement{
render(){
    return html`<h1>hola mundo</h1>`
    
 
}


}

customElements.define('login-element',LoginElement);