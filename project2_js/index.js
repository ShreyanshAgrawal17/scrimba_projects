const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnEl1=document.getElementById("btn-el1")
let btnEl2=document.getElementById("btn-el2")
let sum1,sum2
function display(length){
    btnEl1.textContent=0
    btnEl2.textContent=0
    for(let i=0;i<length;i++)
        {
            sum1=characters[Math.floor(Math.random()*characters.length)]
            sum2=characters[Math.floor(Math.random()*characters.length)]
            btnEl1.textContent+=sum1
            btnEl2.textContent+=sum2
        }
        
}
 
