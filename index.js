let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let countHome = 0 
let countGuest= 0

function plusOneHome(){
    countHome += 1
    homeScoreEl.textContent = countHome
}

function plusTwoHome(){
    homeScoreEl.textContent = countHome += 2
}

function plusThreeHome(){
    homeScoreEl.textContent = countHome += 3
    
}

function plusOneGuest(){
    countGuest += 1
    guestScoreEl.textContent = countGuest
}

function plusTwoGuest(){
    guestScoreEl.textContent = countGuest += 2
}

function plusThreeGuest(){
    guestScoreEl.textContent = countGuest += 3
    
}

