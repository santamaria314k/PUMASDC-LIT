import { css } from "lit-element";



export default css `






.content1 button{
    display: flex;
    position: relative;
    justify-content: left;
    align-items: center;
    border:white ;
    border-radius: 4px;
    color: darkgray;
    width: 200px;
    height: 39px;
    left: 20px;
    font-size: 22px;
    
    }
    .content1{background-color: rgb(190, 183, 183);
    width:249px ;
    border-radius:13px;
    
    }
    
    .principio {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    top: -570px; }
    
    
    
    .solicitud {
        position: relative;
    }
    
    .solicitud::after {
        content: "";
        position: absolute; 
        bottom: -10px; 
        left: 0;
        height: 2px;
        width: 100%;
        background-color: darkgray;
    
    }
    
    .impu {
        position: absolute; 
        left: 50%; 
        top: 61%;
        transform: translate(-50%, -50%); 
        display: flex;
        align-items: center;
        border-radius: 50px;
        border: 4px solid darkgrey; 
        background-color: white;
        width: 1000px;
        height: 310px;
    }
    
      
    
    
    
    .descripcion{
        position: absolute;
        display: flex;
        border-radius: 8px;
        right: 340px;
        bottom: 8px;
        width:600px ;
        height:100px ;
        
    
    }
    
    
    .boton {
        position:relative;
        background-color: #ff2800;
        color: white;
        padding: 8px;
        font-size: 22px;
        border: none;
        border-radius:4px ;
        width: 180px;
        height: 40px;
        margin-bottom: -200px;
       left: 90px;
    
    
    }
    
    input{border-radius: 6px;}
    
    .block1{
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius:50px;
        width: 300px;
        bottom: 50px;
        left:122px;
    }
    
    
    .blocked{
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 8px;
        width: 300px;
        bottom: 50px;
    left: 250px;
    
    
    
    }
    
    /*estilos de los 3 botones*/
    
    
    .principal{
        position: relative;
        display: flex;
        justify-content: center; 
     bottom:888px;
    
    }
    h3{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px;
        border-bottom: 2px solid darkgray; 
        padding-bottom: 10px;
       
       
    }
    
    
    
    .one{
    border:3px solid darkgray ;
    border-radius: 9px;
    width:190px ;
    height:90px ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 13px;
    box-shadow:rgb(224, 210, 210) 2px 5px     ;
    
    }
    
    
    .two{
        border:3px solid darkgray ;
        border-radius: 9px;
        width:150px ;
        height: 90px;
        display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 13px;
    box-shadow:rgb(224, 210, 210) 2px 5px     ;
    
    
    }
    
    .tree{
        border:3px solid darkgray ;
        border-radius: 9px;
        width:150px ;
        height:90px ;
        display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 13px;
    box-shadow:rgb(224, 210, 210) 2px 5px     ;
    
    }
    
    
    h3{color:darkgrey;}



`