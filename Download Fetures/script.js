var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
 var growth = document.querySelector('#growth')
var grow = 0

// var num=Math.random()*100
//    var num2= Math.floor(num)

btn.addEventListener('click', function () {
var growinterval = setInterval(function(){
grow++
h1.innerHTML = grow +'%'
growth.style.width = grow + '%'

},100)

   setTimeout(() => {
    clearInterval(growinterval)
    btn.style.opacity='0.8'
    btn.style.pointerEvents='none'
    btn.innerHTML='Downloaded'
    
   },10000);
   
})

