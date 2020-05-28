let userlogin = "admin";
let userpass = "admin";
function login(){
    let l = document.getElementById("login").value;
    let p = document.getElementById("password").value;

    if(l === userlogin && p=== userpass)
        return alert("You are loged in");
}
function toRegister(){
    window.location = "register.html";
}
function register(){
    userlogin = document.getElementById("login").value;
    userpass = document.getElementById("password").value;
    alert("Вы зарегистрировались! Ваш логин:"+userlogin+" Пароль: "+userpass);
    window.location = "index.html"
}
function clock(){
    window.location = "/Clock/index.html";
}
function toGayText(){
    window.location = "/gayText.html"}
function toTicTacToe(){
    window.location = "/Tictactoe/index.html"
}
function toDraw(){
    window.location = "/Draw/index.html"
}
function toCalendar(){
    window.location = "/Calendar/index.html"
}
function toLab4 () {
    window.location = "/Lab4/lab4.html"
}
