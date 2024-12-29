var card = document.querySelector('#card')
var h1 = document.querySelector('h1')
var body = document.querySelector('body')

body.addEventListener('mousemove',function(dets){
   
  card.style.left = dets.x +'px'
   card.style.top = dets.y +'px'
})

h1.addEventListener('mouseenter',function(){
    card.style.scale = 2
})

h1.addEventListener('mouseleave',function(){
    card.style.scale = 1
})

