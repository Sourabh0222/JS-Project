var btn = document.querySelector('button')
var h5 = document.querySelector('h5')
var img = document.querySelector('img')


var flag = 0

btn.addEventListener('click',function(){
  
if (flag == 0){

h5.innerHTML='friend'
h5.style.color='green'
btn.innerHTML='Remove friend'
btn.style.color='green'
img.style.borderColor = 'green'

flag =1

}else{
    h5.innerHTML='stranger'
    h5.style.color='red'
    btn.innerHTML='Add friend'
    btn.style.color='red'
    img.style.borderColor = 'red'
    
    flag =0
}

})












