var img = document.querySelector('img')
var moveX = 0;
var moveY = 0;
document.addEventListener('keydown',function(event){
    if(event.key =='ArrowRight'){
        moveX++
        img.style.left = moveX+'%'
    }else if(event.key =='ArrowLeft'){
            moveX--
            img.style.left = moveX+'%'
    }else if(event.key =='ArrowDown'){
        moveY++
        img.style.top = moveY+'%'
    
    }else if(event.key =='ArrowUp'){
        moveY--
        img.style.top = moveY+'%'
    
    }
    // else{
    //     console.log('other');
    // }
});