let player1="Player 1"
let player2="Player 2"

function editNames(){
    player1=prompt("Enter First Player Name")
    player2=prompt("Enter Second Player Name")

    if(player1.length <1 || player2.length<1){
        alert("please enter valid name")
        return
    }

    document.querySelector(".Player1").innerHTML=player1
    document.querySelector(".Player2").innerHTML=player2
}

function rollTheDice(){
    let dice1=document.querySelector(".img1")
    let dice2=document.querySelector(".img2")

    dice1.setAttribute("src","images/diceroll.gif")
    dice2.setAttribute("src","images/diceroll.gif")

    let result= document.querySelector('h1')
    setTimeout(() => {
        let random1=Math.floor(Math.random()*6)+1
        let random2=Math.floor(Math.random()*6)+1

         dice1.setAttribute('src','images/dice'+random1+'.png')
         dice2.setAttribute('src','images/dice'+random2+'.png')

         if(random1 === random2){
            result.innerHTML="Draw!"
         }else if(random1 > random2){
            result.innerHTML=player1+" wins!"
         }else{
            result.innerHTML=player2+" wins!"
         }
    }, 2500);
}
