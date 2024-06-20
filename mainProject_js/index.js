import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref,push,onValue,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-data-969ef-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const remarkinDB=ref(database,"reviewList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const reviewListEl = document.getElementById("review-list")
const smallInputFieldEl1=document.getElementById("small1-input-field")
const smallInputFieldEl2=document.getElementById("small2-input-field")

function clearInputField() {
    inputFieldEl.value = ""
    smallInputFieldEl1.value=""
    smallInputFieldEl2.value=""
}

function clearRemarkList() {
    reviewListEl.innerHTML = ""
}

addButtonEl.addEventListener("click",function(){
    let inputValue=inputFieldEl.value
    let smallInputValue1=smallInputFieldEl1.value
    let smallInputValue2=smallInputFieldEl2.value
    let review = {
        from: smallInputValue1,
        to: smallInputValue2,
        text: inputValue
    };

    push(remarkinDB,review)
    clearInputField()
})

onValue(remarkinDB,function(snapshot){
    if(snapshot.exists()){
        let itemsArray=Object.entries(snapshot.val()).reverse()
        clearRemarkList()
        for(let i=0;i<itemsArray.length;i++){
            let currentItem=itemsArray[i]
            let currentItemID=currentItem[0]
            let currentItemValue=currentItem[1]

            appendItemToReviewList(currentItem)
        }
    }
    else{
        reviewListEl.innerHTML=`No comments...yet`
    }
})

function appendItemToReviewList(item){
    let itemID=item[0]
    let itemValue=item[1]

    let newEl=document.createElement("li")

    newEl.innerHTML=` <strong>To <i>${itemValue.to}</i><br><br></strong>
                        ${itemValue.text} <br><br>
                       <strong> From <i>${itemValue.from}</i> </strong>
                        `
    newEl.addEventListener("click",function(){
        let exactLocationOfItemInDB=ref(database,`reviewList/${itemID}`)
        if(remove(exactLocationOfItemInDB)){
            alert("Are you sure you want to delete!")
        }
    })
    reviewListEl.appendChild(newEl)
}
