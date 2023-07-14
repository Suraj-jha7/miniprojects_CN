var outer=document.getElementById("outer");
var btn=document.getElementById("btn");

btn.addEventListener('click',function(){
   
var index=Math.floor(Math.random()*10**6);
var colors='#'+index;
outer.style.background=colors;
console.log(colors);

})


var btn2=document.getElementById('btn2');
var box=document.getElementById('box');
btn2.addEventListener('click',function(){

    var shape=['circle','square','rectangle','triangle'];
    shape.forEach(element => {
        if(box.classList==element)
        {
            box.classList.remove(element);
        }
    });
    var index=(Math.floor(Math.random()*10))%4;
    box.classList.add(shape[index]);

    
})

