var user = [
{
    profile:"https://tse3.mm.bing.net/th?id=OIP.9lp-AzhvWVzYdKMb9E8tLQHaHs&pid=Api&P=0&h=180",
    story:"https://media.istockphoto.com/id/94502345/photo/sunflare-on-road.jpg?s=612x612&w=0&k=20&c=2WfTN9CH-VdgCdWN3-i7WXG3n0ylSPJ6hGxSJpp6K0g=",
    name: 'sourabh',
    time:'1 min ago'
},
{
    profile:"https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg",
    story:"https://images.unsplash.com/photo-1734490422581-cd3bd481c99e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D",
    name: 'arun',
    time:'30 min ago'
   
},
{
    profile:"https://tse3.mm.bing.net/th?id=OIP.Lcf-cTifGu9WjEjr7CiCOwHaJ2&pid=Api&P=0&h=180",
    story:"https://images.unsplash.com/photo-1732919258529-44f50088aefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    name: 'rishab',
    time:'40 min ago'
    
}, 
{
    profile:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    story:"https://images.unsplash.com/photo-1728415496304-83bbc2f11ae2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbGxhcGFwZXJ8ZW58MHx8MHx8fDA%3D",
    name: 'gourav',
    time:'10 min ago'
    
},
{
    profile:"https://up.yimg.com/ib/th?id=OIP.302zgzUHVpOuGmsmRZudiAHaHk&pid=Api&rs=1&c=1&qlt=95&w=116&h=118",
    story:"https://images.unsplash.com/photo-1533274684449-a00e3142ce2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VubGlnaHR8ZW58MHx8MHx8fDA%3D",
    name: 'hariom',
    time:'33 min ago'
},
{
    profile:"https://up.yimg.com/ib/th?id=OIP.Y6Xo7ozc-rL5UrzUanPlxAHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104",
    story:"https://plus.unsplash.com/premium_photo-1733922193042-0824b0c8ee2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8OTN8fHxlbnwwfHx8fHw%3D",
    name: 'prayag',
    time:'60 min ago'
},
{
    profile:"https://i.pinimg.com/originals/60/2c/d4/602cd4c6666f944936662b0198553062.jpg",
    story:"https://plus.unsplash.com/premium_photo-1690522330262-5bdf16b17e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8ODl8fHxlbnwwfHx8fHw%3D",
    name:"gopal",
    time:"1 hour ago"

},
{
    profile:"https://tse3.mm.bing.net/th?id=OIP.-habfDVMeBHyadyY2UA9PAAAAA&pid=Api&P=0&h=180",
    story:"https://plus.unsplash.com/premium_photo-1723568426547-61953c401783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8MzJ8fHxlbnwwfHx8fHw%3D",
    name:"vishal",
    time:"4 hour ago"

},
{
    profile:"https://tse2.mm.bing.net/th?id=OIP.G3r2PIQnTddfCH2WCgQN-QHaHa&pid=Api&P=0&h=180",
    story:"https://images.unsplash.com/photo-1732945302017-fbc971324ebe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    name:"rohan",
    time:"55 min ago"

},
{
    profile:"https://tse4.mm.bing.net/th?id=OIP.2JUq1SUxNXI-iK1ncXQQFgHaLH&pid=Api&P=0&h=180",
    story:"https://images.unsplash.com/photo-1734386011664-a17cc4ef6755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    name:"aditya",
    time:"45 min ago"

}, 

];


var sum = '';
user.forEach(function(elem, idx) {
   sum += `<div class="status" id="${idx}">
            <img src="${elem.profile}" alt="">
            <div class="user">
            <h5>${elem.name}</h5>
            <h6>${elem.time}</h6>
           </div>
      </div>`;
});

var allStatus = document.querySelector(".allStatus");
var full = document.querySelector('#full');

allStatus.innerHTML = sum;

allStatus.addEventListener('click', function(event) {
    if (event.target.tagName === 'DIV' && event.target.classList.contains('status')) {
        var gold = user[event.target.id];

        full.style.display = 'block';
        full.style.backgroundImage = `url(${gold.story})`;
    }
    setTimeout(function(){
        full.style.display='none'
    },3000)
});