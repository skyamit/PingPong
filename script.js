var outer = document.getElementById("outer");
var height = outer.clientHeight - 20 ;
var width = outer.clientWidth - 20;
var distance = 50;
var score = 0;

document.addEventListener('keydown',function handle(event){
    var code = event.key;
    if(code == 'ArrowLeft'){
        left();
    }
    if(code == 'ArrowRight'){
        right();
    }
});

function right(){
    var top = document.getElementById('top');
    var bottom = document.getElementById('bottom');
    if(top.offsetLeft <= width-100){
        top.style.left = (top.offsetLeft + distance)+"px";
        bottom.style.left = (bottom.offsetLeft + distance )+"px";
    }
}

function left(){
    var top = document.getElementById('top');
    var bottom = document.getElementById('bottom');
    if(top.offsetLeft > 0){
        top.style.left = (top.offsetLeft - distance)+"px";
        bottom.style.left = (bottom.offsetLeft - distance )+"px";
    }
}

setInterval(moveBall, 100);

var t = 1;
var l = 1;
var speed = 10;
function moveBall(){
    var ball = document.getElementById("ball");
    // left wall touched
    if(ball.offsetLeft == 0){
        l = 0;
    }
    // top wall touched
    if(ball.offsetTop == 0){
        t = 0;
        var m = document.getElementById('top').offsetLeft;
        var left = ball.offsetLeft;
        console.log(left, m, m+100, m<=left, left>=m+100);
        if(m<=left && left<=m+100){
            score++;
        }
        else{
            console.log(localStorage.getItem("score"));
            if(localStorage.getItem("score") == null || localStorage.getItem("score") > score){
                alert("Game Over !! Your score is highest ever "+score);
                localStorage.setItem("score",score);
            }
            else{
                alert("game Over!!"+ " Your score is "+score);
                score = 0;
            }
        }
    }
    // bottom wall touched
    if(ball.offsetTop >= height){
        t = 1;
        var m = document.getElementById('bottom').offsetLeft;
        var left = ball.offsetLeft;
        console.log(left, m, m+100, m<=left, left>=m+100);
        if(m<=left && left<=m+100){
            score++;
        }
        else{
            console.log(localStorage.getItem("score"));
            if(localStorage.getItem("score") == null || localStorage.getItem("score") > score){
                alert("Game Over !! Your score is highest ever "+score);
                localStorage.setItem("score",score);
            }
            else{
                alert("game Over!!"+ " Your score is "+score);
                score = 0;
            }
        }
    }
    // right wall touched
    if(ball.offsetLeft >= width){
        l = 1;
    }

    if(t === 1 && l == 1){
        ball.style.top = (ball.offsetTop - speed ) + 'px'; 
        ball.style.left = (ball.offsetLeft - speed) + 'px';
    }
    if(t === 1 && l == 0){
        ball.style.top = (ball.offsetTop - speed ) + 'px'; 
        ball.style.left = (ball.offsetLeft + speed) + 'px';
    }
    if(t === 0 && l == 1){
        ball.style.top = (ball.offsetTop + speed ) + 'px'; 
        ball.style.left = (ball.offsetLeft - speed) + 'px';
    }
    if(t === 0 && l == 0){
        ball.style.top = (ball.offsetTop + speed ) + 'px'; 
        ball.style.left = (ball.offsetLeft + speed) + 'px';
    }
}

moveBall();