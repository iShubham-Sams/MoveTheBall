
document.onkeydown= function (event){


if(event.keyCode==87){
    let man=document.querySelector('#ball')
    let computstyle=parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));
    man.style.top=computstyle+(-10)+"px"
       
                     }
if(event.keyCode== 65){ 
let man=document.querySelector('#ball')
let computstyle=parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
man.style.left=computstyle+(-10)+"px"

                        }

if(event.keyCode==83){
    let man=document.querySelector('#ball')
    let computstyle=parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));
    man.style.top=computstyle+(+10)+"px"
                     }
if(event.keyCode==68){
let man=document.querySelector('#ball')
let computstyle=parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
man.style.left=computstyle+(+10)+"px"
                      }

}
