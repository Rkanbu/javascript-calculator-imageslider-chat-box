var img = document.getElementById("img");
var full =["/images2/3.jpg","/images2/4.jpg","/images2/7.jpg","/images2/10.jpg","/images2/11.jpg","/images2/12.jpg","/images2/13.jpg","/images2/14.jpg","/images2/15.jpg","/images2/17.jpg","/images2/18.jpg","/images2/19.jpg","/images2/20.jpg","/images2/22.jpg","/images2/23.jpg"];

count= -1;
function forward(){
    console.log(full.length);
    if (count<=full.length){
        count+=1
        img.src=full[count]
        if(count==full.length){
            count=0
            img.src=full[count]
        }
    }
}

function backword(){
    
    if(count<=full.length){
        count-=1;
        img.src = full[count];
        if(count==0){
            img.src = full[count]
            count=13;
        }
    }
    if(count==-2 || count==-1){
        count=full.length-1;
        img.src=full[count]
    }
}

function msg(){
     let val1 = document.getElementById("msg1").value;
     let val2 = document.getElementById("msg2").value;
     if(val1!=''){
        var element = document.createElement("li");
        element.style.listStyle="none";
        element.style.color="black";
        element.style.fontFamily= 'Dancing Script';
        var text= document.createTextNode(val1);
        element.appendChild(text);
        var screen= document.getElementById("screen");
        screen.appendChild(element);
        val1 = document.getElementById("msg1").value='';
        

     }
     if(val2!=''){
        var element = document.createElement("li");
        element.style.listStyle="none";
        element.style.color="teal";
        element.style.textAlign="right";
        element.style.fontFamily= 'Dancing Script';
        var text= document.createTextNode(val2);
        element.appendChild(text);
        var screen= document.getElementById("screen");
        screen.appendChild(element);
        val1 = document.getElementById("msg2").value='';
        

     }

}