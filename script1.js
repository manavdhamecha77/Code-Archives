let minn
let maxn

document.getElementById(`mysubmit`).onclick = function(){
    minn = document.getElementById("min").value
    console.log(minn)
    minn = Number(minn)
    maxn = document.getElementById("max").value
    console.log(maxn)
    maxn = Number(maxn)    
}

document.getElementById(`mybutton`).onclick = function(){
    let randomnum = Math.floor(Math.random()*(maxn-minn+1)) + minn 
    console.log(randomnum)
    
    document.getElementById(`myh2`).textContent = `The number is ${randomnum}`

}