
function compch(){
    let x=Math.floor((Math.random())*4);
    const arr=["rock","paper","scissors"]
    return arr[x];
}








userch=""
function gamestart(){
 let btn=document.querySelector("#btn");
//  btn.remove();
//  let divs= document.querySelector("#divs");
 btn.innerText="choose one of the image";
 btn.style.backgroundColor="yellow";
 
 paper=document.querySelector("#paper");
 paper.onmouseover=() =>{
    paper.style.borderColor="red";
    paper.style.width="25%";
    // paper.style.marginLeft="3%";
    // paper.style.marginright="3%";
    
 }
 paper.onmouseout=() =>{
    paper.style.borderColor="black";
    paper.style.width="20%";
 }
 scissors=document.querySelector("#scissors");
 scissors.onmouseover=() =>{
    scissors.style.borderColor="red";
    scissors.style.width="25%";
 }
 scissors.onmouseout=() =>{
    scissors.style.borderColor="black";
    scissors.style.width="20%";
 }
 rock=document.querySelector("#rock");
 rock.onmouseover=() =>{
    rock.style.borderColor="red";
    rock.style.width="25%";
 }
 rock.onmouseout=() =>{
    rock.style.borderColor="black";
    rock.style.width="20%";
 }

 let compchs=compch()


 rock.onclick=()=>{
    userch="rock";
    switch(compchs){
        case("rock"):
        btn.innerText="it is a draw";
        btn.style.backgroundColor="yellow";
        break;
        case("paper"):
        btn.innerText="you won";
        btn.style.backgroundColor="green";
        break;
        case("scissors"):
        btn.innerText="you lost";
        btn.style.backgroundColor="red";
        break;
    }
}
// paper.onclick=()=>{
//     userch="paper";
// }
// scissors.onclick=()=>{
//     userch="scissors";
// }

paper.onclick=()=>{
   userch="paper";
   switch(compchs){
       case("paper"):
       btn.innerText="it is a draw";
       btn.style.backgroundColor="yellow";
       break;
       case("rock"):
       btn.innerText="you won";
       btn.style.backgroundColor="green";
       break;
       case("scissors"):
       btn.innerText="you lost";
       btn.style.backgroundColor="red";
       break;
   }
}
scissors.onclick=()=>{
   userch="scissors";
   switch(compchs){
       case("scissors"):
       btn.innerText="it is a draw";
       btn.style.backgroundColor="yellow";
       break;
       case("paper"):
       btn.innerText="you won";
       btn.style.backgroundColor="green";
       break;
       case("rock"):
       btn.innerText="you lost";
       btn.style.backgroundColor="red";
       break;
   }
}




}