var outer = document.getElementById("outer");
var height = outer.clientHeight - 20 ;
var width = outer.clientWidth - 20;
var distance = 50;
var score = 0;
var ball = document.getElementById("ball");
var start_div = document.getElementById("start");
var left_div = document.getElementById("left");
var right_div = document.getElementById("right");
var score_div = document.getElementById("score");

left_div.hidden = true;
right_div.hidden = true;
var playing = false;

function start() {
    score = 0;
    score_div.innerText = "Score : "+score;
    start_div.hidden = true;
    left_div.hidden = false;
    right_div.hidden = false;

    ball.style.top = '40%'; 
    ball.style.left = '50%';
    playing = true;
    setInterval(moveBall, 100);
}

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

var t = 1;
var l = 1;
var speed = 10;
var ball = document.getElementById("ball");
function moveBall(){
    if(playing === false) {
        return;
    }

    score_div.innerText = "Score : "+score;

    if(ball.offsetLeft <= 0){
        l = 0;
    }
    if(ball.offsetLeft >= width){
        l = 1;
    }
    // top wall touched
    if(ball.offsetTop <= 0){
        t = 0;
        var m = document.getElementById('top').offsetLeft;
        var left = ball.offsetLeft;

        if(m<=left && left<=m+100){
            score++;
        }
        else{
            game_over();
        }
    }
    // bottom wall touched
    if(ball.offsetTop >= height){
        t = 1;
        var m = document.getElementById('bottom').offsetLeft;
        var left = ball.offsetLeft;

        if(m<=left && left<=m+100){
            score++;
        }
        else{
            game_over();
        }
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

function game_over() {
    playing = false;
    start_div.innerText = "Game Over!! Play again."
    start_div.hidden = false;
    left_div.hidden = true;
    right_div.hidden = true;
    console.log("Game Over");
}