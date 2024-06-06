 let countEl1=document.getElementById("one-el1")
 let countEl2=document.getElementById("one-el2")
 
let count1=0
let count2=0
function oneEl1(){
    count1+=1
    countEl1.textContent=count1
}

function twoEl1(){
    count1+=2
    countEl1.textContent=count1
}

function threeEl1(){
    count1+=3
    countEl1.textContent=count1
}

function oneEl2(){
    count2+=1
    countEl2.textContent=count2
}

function twoEl2(){
    count2+=2
    countEl2.textContent=count2
}

function threeEl2(){
    count2+=3
    countEl2.textContent=count2
}

function newgame(){
    count1=0
    countEl1.textContent=count1
    count2=0
    countEl2.textContent=count2
}
