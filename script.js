const com=document.getElementById('com');
const chat=document.getElementById('chat');
const stat=document.getElementById('stat');
const call=document.getElementById('cal');
const sea=document.getElementById('sea');
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
