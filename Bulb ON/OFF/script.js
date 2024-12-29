
 var circal = document.querySelector('#circal')
 var btn = document.querySelector('button')
var grow = 0
 btn.addEventListener('click',function(){
    if(grow==0){
         circal.style.backgroundColor= 'red'
         btn.innerHTML= 'on'
grow=1
    }else{
        circal.style.backgroundColor='yellow'
        btn.innerHTML= 'off'
        grow=0
    }
   
    
 })