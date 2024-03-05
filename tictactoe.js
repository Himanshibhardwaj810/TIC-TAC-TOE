let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");
let new_game=document.querySelector("#new-game");
let msz=document.querySelector( ".msz-container" );
let winner=document.querySelector("#winner");
let turn0=true;// player 0 turn 

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
       
        if(turn0){//player0
            box.innerText ="0";
            turn0 = false;
        }else{//playerX
            box.innerText ="X";
            turn0 = true;
        }
        box.disabled = true; //make the button unclickable 
        checkWin();
})
})

const resetgame=()=>{
 turn0=true;
 enablebox();
 msz.classList.add("hide");
}

const disableboxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(win)=>{
    winner.innerText=`Congratulations! Winner is ${win}`;
    msz.classList.remove("hide");
    disableboxes();
}
const checkWin=() => {
    for(let pattern of winpatterns){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
    
    if(pos1!="" && pos2!="" && pos3!=""){
       if(pos1==pos2 && pos2==pos3){
        
        showwinner(pos1);
       }
    }
}

}

new_game.addEventListener("click",resetgame);
reset_btn.addEventListener( "click" , resetgame ); 