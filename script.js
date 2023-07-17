const com=document.getElementById('com');
const chat=document.getElementById('chat');
const stat=document.getElementById('stat');
const call=document.getElementById('cal');
const sea=document.getElementById('sea');
let back=document.querySelector('.back');
let chatbox=document.querySelector('.chatbox');
let open=document.querySelector('.open');


const vsr=com.addEventListener('click',function(){
    sea.style.display='none';
});
chat.addEventListener('click',function(){
    sea.style.display='block';
});
stat.addEventListener('click',function(){
    sea.style.display='block';
});
call.addEventListener('click',function(){
    sea.style.display='block';
});


back.addEventListener('click',function(){
    chatbox.classList.add('hide');
});

open.addEventListener('click',function(){
    chatbox.classList.remove('hide');
    chatbox.style.display="block";
});
 
back.addEventListener('click',function(){
    chatbox.classList.add('hide');
    chatbox.style.display='none';
});
