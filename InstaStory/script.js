var arr = [
    {
     dp:'https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww',
     story:'https://images.unsplash.com/photo-1655514557231-a76d738620e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0b3J5JTIwcGhvdG98ZW58MHx8MHx8fDA%3D',
     username:'Yourstory'
    },
    {
     dp:'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D',
     story:'https://images.unsplash.com/photo-1655514431392-b8080d4e108d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0b3J5JTIwcGhvdG98ZW58MHx8MHx8fDA%3D',
     username:'sourabh'
    },
    {
     dp:'https://images.unsplash.com/photo-1660680299120-c7c132df1b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D',
     story:'https://images.unsplash.com/photo-1629884694930-b047525afb1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHN0b3J5JTIwcGhvdG98ZW58MHx8MHx8fDA%3D',
     username:'anurag'
    },
    {
     dp:'https://images.unsplash.com/photo-1647685658173-94c4f42725fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D',
     story:'https://images.unsplash.com/photo-1609267889884-7d27a06f687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN0b3J5JTIwcGhvdG98ZW58MHx8MHx8fDA%3D',
     username:'prayge'
    },
    {
     dp:'https://images.unsplash.com/photo-1672843192615-5913ef88bf17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D',
     story:'https://plus.unsplash.com/premium_photo-1682308144147-b4c0f422bdbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHN0b3J5JTIwcGhvdG98ZW58MHx8MHx8fDA%3D',
     username:'vishal'
    },
    {
     dp:'https://images.unsplash.com/photo-1669475616380-ecb159b790d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D',
     story:'https://images.unsplash.com/photo-1583265627959-fb7042f5133b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     username:'gourav'
    },
]

var sum = ''

arr.forEach(function(elem,idx){
    sum += `<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>`    
})

var storiyan = document.querySelector('.storiyan') 
var full = document.querySelector('#full')
var user = document.querySelector('#full h2')
var growth = document.querySelector('#growth')

storiyan.innerHTML = sum
 
storiyan.addEventListener('click',function(event){
    var grow = 0;
   
        var gold = arr[event.target.id];

        var int = setInterval(function(){
            grow++;

            growth.style.width = grow + "%";
        },30);

        full.style.display = 'block';
        full.style.backgroundImage = `url(${gold.story})`;
        user.innerHTML = gold.username;
        
        setTimeout(function(){
            full.style.display = 'none';
            clearInterval(int);
            
        }, 3000);
    
})