const container= document.querySelector(".container");
function Game(){
    this.turn=0; 
    this.game=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    this.pressed=[];
    this.tempvar=0;
}
const game1=new Game();


for(var i=0;i<9;i++){
    const div=document.createElement("div");
    
    div.className="square";
    div.addEventListener("click", function(){
        
        div.style="background-color:red";
    });
    container.appendChild(div) 
}

function Player(name){
    this.name=name;
    this.game=[
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ];
    
}



