 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 let decreaseEl = document.getElementById("count-el")
 let resetEl = document.getElementById("count-el")
console.log(saveEl)

let count = 0

function increment(){
	count = count+1
	countEl.textContent = count
}

function save(){
	let savecount = count + " | "
	saveEl.textContent += savecount
	console.log(count)
}
function decrease(){
	count = count - 1
	decreaseEl.innerText = count
}
function reset(){
	count = 0
	resetEl.innerText= count
}