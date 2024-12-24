const input = document.getElementById(`myinput`)
const submit = document.getElementById(`mysubmit`)
const pre = document.getElementById(`mypre`)
const h2 = document.getElementById(`myh2`)

let numguess
let randomnum = Math.floor(Math.random()*(10-1+1)) + 1
let attempt = 0
    
submit.onclick = function(){
    numguess = input.value
    numguess = Number(numguess)
    if(numguess>=0 && numguess<=10 && numguess !== "" || null){
        if(numguess === randomnum){
            pre.textContent = `You Win!!! 🏆🏆🏆`
        }
    
        else{
            pre.textContent = 
            `
                You Lose !!!
            Number you Guessed:${numguess}
            Correct Number Guess:${randomnum}
            `
            
            attempt ++

            h2.textContent = ``
        }
    }

    else{
        pre.textContent = `Please guess between 1-10`
    }
}
