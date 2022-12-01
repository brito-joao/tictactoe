const container= document.querySelector(".container");
const info= document.querySelector(".title");

function Game(){
    this.turn=0; 
    
    this.pressed=[];
    this.coordinates=[
        [0,0],
        [0,1],
        [0,2],

        [1,0],
        [1,1],
        [1,2],

        [2,0],
        [2,1],
        [2,2]

    ];
    this.end=false;
    this.exit=false;
}

Game.prototype.coordinateCheck=function(point_cordinat){
    var pressed=false;
    game1.pressed.forEach((item)=>{
        if(item==point_cordinat){
            pressed=true;
        }
    });
    return pressed;
}
Game.prototype.drawCheck=function(){
    
    if(game1.pressed.length==9){
        this.end=true;
        return true;
    }else{
        return false;
    }
    
}
Game.prototype.coordinate2List=function(point_coordinat,player){
    
    if(player==1){
        player1.game[point_coordinat[0]][point_coordinat[1]]=1;

    }else{
        player2.game[point_coordinat[0]][point_coordinat[1]]=1;
    }
    
    
    
    

}

function arrayCompare1(array){

    //case 2
    if(array[0][0]==1&&array[1][1]==1&&array[2][2]==1){
        return true;
    }else{

        //case 1
        if(array[2][0]==1&&array[1][1]==1&&array[0][2]==1){
            //true
            return true;
        }else{
            return false;
        }
    }
}
function horizontalCompare(array){
    if(array[0][0]+array[0][1]+array[0][2]==3 || array[1][0]+array[1][1]+array[1][2]==3 || array[2][0]+array[2][1]+array[2][2]==3){
        return true;
    }else{
        return false;
        
    }
}
function verticalCompare(array){
    if(array[0][0]+array[1][0]+array[2][0]==3 || array[0][1]+array[1][1]+array[2][1]==3 || array[0][2]+array[1][2]+array[2][2]==3){
        return true;
    }else{
        return false;
        
    }
}
Game.prototype.diagonalCheck=function(player){
    
    if(player==1){
        
        if(arrayCompare1(player1.game)==true){
            this.end=true;
            info.innerText="Game Over";
            
        }
    }else{
        if(arrayCompare1(player2.game)==true){
            this.end=true;
            info.innerText="Game Over";
            
        }
    }
}

Game.prototype.horizontal_verticalCheck=function(player){
    if(player==1){
        if(horizontalCompare(player1.game)==true || verticalCompare(player1.game)==true){
            this.end=true;
            info.innerText="Game Over";
        }
    }else{
        if(horizontalCompare(player2.game)==true || verticalCompare(player2.game)==true){
            this.end=true;
            info.innerText="Game Over";
        }
    }
}
Game.prototype.divCreation=function(){
    for(var i=0;i<9;i++){


        const div=document.createElement("div");
        const point_coordinate=game1.coordinates[i];
        div.className="square";
        div.innerHTML="<p>⠀</p>";


        div.addEventListener("click", function(){

            
            
            

            //to check if was pressed 
            if(game1.coordinateCheck(point_coordinate)==true){
                
            }else{

                game1.turn+=1;
                if(game1.turn%2){
                    game1.coordinate2List(point_coordinate,1);
                    game1.diagonalCheck(1);
                    game1.horizontal_verticalCheck(1);
                    div.innerHTML="<p class='even'>x</p>";
                }else{
                    game1.coordinate2List(point_coordinate,2);
                    game1.diagonalCheck(2);
                    game1.horizontal_verticalCheck(2);
                    div.innerHTML="<p >o</p>";
                }
                game1.pressed.push(point_coordinate);
            }

            if(game1.drawCheck()==true){
                //container.style="background-color:red";
                info.innerText="Draw!!";
            }

            if(game1.exit==true){
                //edit all of the other divs and clear all of the arrays, player 1 and player 2;
                restartGame();
                container.style="background-color:black";
                game1.exit=false;
                game1.end=false;
            }

            if(game1.end==true){
                game1.exit=true;
                container.style="background-color:red";
                
            }
            
        });
        container.appendChild(div);
        
    }
}

const game1=new Game();

game1.divCreation();


function Player(){

    this.game=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    
}
let player1=new Player();
let player2=new Player();

function restartGame(){
    const divs=document.querySelectorAll(".square");
    divs.forEach((item)=>{
        item.innerHTML="<p>⠀</p>";
    })
    player1.game=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    player2.game=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    game1.pressed=[];
}
