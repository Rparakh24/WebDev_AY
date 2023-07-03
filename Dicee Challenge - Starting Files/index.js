var n = Math.floor(Math.random()*6)+1;
if(n==1){
    document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
}
else if(n==2){
    document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
}
else if(n==3){
    document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
}
else if(n==4){
    document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
}
else if(n==5){
    document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
}
else{
   document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
    
}

var n2 = Math.floor(Math.random()*6)+1;
if(n2==1){
    document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
}
else if(n2==2){
    document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
}
else if(n2==3){
    document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
}
else if(n2==4){
    document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
}
else if(n2==5){
    document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
}
else{
   document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
    
}

if(n>n2){
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
}
if(n<n2){
    document.querySelector("h1").innerHTML="🚩 Player 2 wins";   
}