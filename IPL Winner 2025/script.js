var teams = ['CSK','MI','KKR','GT','RR','SRH','PBKS','DC','RCB']

var btn = document.querySelector('button')

var h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()* teams.length)
    h1.innerHTML = teams[num]
}) 
btn.addEventListener('click',function(){
    var a1 = Math.floor(Math.random()*255)
    var a2 = Math.floor(Math.random()*255)
    var a3 = Math.floor(Math.random()*255)


   h1.style.backgroundColor = `rgb(${a1},${a2},${a3})`
}) 