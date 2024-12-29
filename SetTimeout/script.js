var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var flag = 0
btn.addEventListener('click',function(){
    
    if (flag == 0) {
    h2.innerHTML = 'sending...'
    btn.innerHTML = 'adding...'
    h2.style.color = 'red'
   
    
    setTimeout(function ()  {
        h2.innerHTML = 'friend'
        btn.innerHTML = 'remove friend'
        h2.style.color = 'green'
    }, 3000)
    flag = 1
}else {
    h2.innerHTML = 'stanger'
    btn.innerHTML = 'Add friend'
    h2.style.color = 'yellow'

   flag = 0
   }
})
