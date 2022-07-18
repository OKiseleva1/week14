let divOut=document.querySelector(".out");
divOut.onclick=function(){
    this.style.background='green';
} 


let inputIn= document.querySelector('.input-in'); //input
let buttonGo=document.querySelector('.go'); //button

let divOut1=document.querySelector('.out1');
buttonGo.onclick=function(){    
    let z=inputIn.value;
    console.log (z);
    divOut1.innerHTML="Ваше имя: " +z;
    inputIn.value='';
}

let inputCalc=document.querySelector(".calc");
let inputCalc2=document.querySelector(".calc2");
let inputResult=document.querySelector(".result");
let buttonPlus=document.querySelector(".plus");
let buttonMinus=document.querySelector(".minus");
let buttonUmn=document.querySelector(".umn");
let buttonDel=document.querySelector(".del");

buttonMinus.onclick=function(){
let a=+inputCalc.value;
let b=+inputCalc2.value;
inputResult.value=a-b;
}
buttonPlus.onclick=function(){
    let c=+inputCalc.value;
    let d=+inputCalc2.value;
    inputResult.value=c+d;
    }
    buttonUmn.onclick=function(){
        let e=+inputCalc.value;
        let f=+inputCalc2.value;
        inputResult.value=e*f;
        }
        buttonDel.onclick=function(){
            let g=+inputCalc.value;
            let h=+inputCalc2.value;
            inputResult.value=g/h;
            }


        
let buttonLeft=document.querySelector(".left");
let buttonRight=document.querySelector(".right");
let img=document.querySelector("img");

i=1;
buttonRight.onclick=function(){
    i=+i+1;
    img.src=i+'.jpg';
}

buttonLeft.onclick=function(){
    i=+i-1;
    img.src=i+'.jpg';
}