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

Game.prototype.coorCheck=function(p_coor){
    var pressed=false;
    game1.pressed.forEach((item)=>{
        if(item==p_coor){
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
Game.prototype.coor2List=function(p_coor,player){
    
    if(player==1){
        player1.game[p_coor[0]][p_coor[1]]=1;

    }else{
        player2.game[p_coor[0]][p_coor[1]]=1;
    }
    
    
    
    console.log("Look at this thing:",player1.game);

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
function horizCompare(array){
    if(array[0][0]+array[0][1]+array[0][2]==3 || array[1][0]+array[1][1]+array[1][2]==3 || array[2][0]+array[2][1]+array[2][2]==3){
        return true;
    }else{
        return false;
        
    }
}
function vertCompare(array){
    if(array[0][0]+array[1][0]+array[2][0]==3 || array[0][1]+array[1][1]+array[2][1]==3 || array[0][2]+array[1][2]+array[2][2]==3){
        return true;
    }else{
        return false;
        
    }
}
Game.prototype.diagonalCheck=function(player){
    
    if(player==1){
        console.log(player1.game,"player diagonal check");
        if(arrayCompare1(player1.game)==true){
            this.end=true;
            info.innerText="Game Over";
            console.log("JLJLJLKHKJHLKJHLKJHLHGG");
        }
    }else{
        if(arrayCompare1(player2.game)==true){
            this.end=true;
            info.innerText="Game Over";
            console.log("JLJLJLKHKJHLKJHLKJHLHGG");
        }
    }
}

Game.prototype.hor_vertCheck=function(player){
    if(player==1){
        if(horizCompare(player1.game)==true || vertCompare(player1.game)==true){
            this.end=true;
            info.innerText="Game Over";
        }
    }else{
        if(horizCompare(player2.game)==true || vertCompare(player2.game)==true){
            this.end=true;
            info.innerText="Game Over";
        }
    }
}
Game.prototype.divGen=function(){
    for(var i=0;i<9;i++){


        const div=document.createElement("div");
        const point_coordinate=game1.coordinates[i];
        div.className="square";
        div.innerHTML="<p>⠀</p>";


        div.addEventListener("click", function(){

            
            
            console.log(point_coordinate)

            //to check if was pressed 
            if(game1.coorCheck(point_coordinate)==true){
                console.log("was already pressed");
            }else{

                game1.turn+=1;
                if(game1.turn%2){
                    game1.coor2List(point_coordinate,1);
                    game1.diagonalCheck(1);
                    game1.hor_vertCheck(1);
                    div.innerHTML="<p class='even'>x</p>";
                }else{
                    game1.coor2List(point_coordinate,2);
                    game1.diagonalCheck(2);
                    game1.hor_vertCheck(2);
                    div.innerHTML="<p >o</p>";
                }
                game1.pressed.push(point_coordinate);
            }

            if(game1.drawCheck()==true){
                container.style="background-color:red";
                info.innerText="Draw!!";
            }

            if(game1.exit==true){
                //edit all of the other divs and clear all of the arrays, player 1 and player 2;
                
                game1.exit=false;
            }

            if(game1.end==true){
                game1.exit=true;
                container.style="background-color:red";
            }
            console.log(game1.pressed);
        });
        container.appendChild(div);
        
    }
}

const game1=new Game();

game1.divGen();


function Player(){

    this.game=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    
}
let player1=new Player();
let player2=new Player();


