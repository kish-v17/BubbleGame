var time=60;
var hit=0;
var score=0;
function makeBubbles(){
var bubbles="";
for(i=1;i<=175;i++){
    var r=Math.floor(Math.random()*10);
    bubbles+=`<div class="bubble">${r}</div>`;
}
document.querySelector(".bottom").innerHTML=bubbles;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timer").textContent=time;
        }else{
            clearInterval(timerInt);
            document.querySelector(".bottom").innerHTML = `<div class="gameover"><h1>Game Over</h1><a href="javascript:location.reload()">Play Again</a></div>`;
            document.querySelector("#hit").textContent = 0;
        }
    },1000);
}

function getNewHit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hit;
}

function increaseScore(){
        score+=10;
        document.querySelector("#score").textContent=score;
}

document.querySelector(".bottom").addEventListener("click",function(dets){
    var hitted=Number(dets.target.textContent);
    if(hitted===hit){
        increaseScore();
        makeBubbles();
        getNewHit();
    }
})
makeBubbles();
runTimer();
getNewHit();