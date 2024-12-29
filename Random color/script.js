var btn = document.querySelector('button')
var card = document.querySelector('#box')


btn.addEventListener('click',function(){
    var a1 = Math.floor(Math.random()*255)
    var a2 = Math.floor(Math.random()*255)
    var a3 = Math.floor(Math.random()*255)


   card.style.backgroundColor = `rgb(${a1},${a2},${a3})`
}) 