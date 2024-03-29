import { css } from "lit-element";



export default css `



/* selects */



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





/* tabla con balones */

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


/* tabla */
table {
    border-collapse: collapse;
    border: 2px solid darkgrey;
    border-radius: 10px;
    width: 800px;
    height: 200px;
  }
  
  th, td {
    border: 2px solid darkgrey;
    padding: 8px;
  }
  
  tr:first-child {
    background-color: rgb(148, 148, 148);
  }
  
  .bord {
    position: relative;
    border: 2px solid darkgrey;
    border-radius: 8px;
    margin: 338px;
    top: -850px;
}



/* estilo de4ls primeros bnotones */


.principal{
    position: relative;
    display: flex;
    justify-content: center; 
    top: -560px;

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