var red=125,
    green=125,
    blue=125,

    txt="rgb(125,125,125)",

    display1= document.querySelector(".colorResult");
    display1.innerHTML=txt;
    display1.style.backgroundColor=txt;

function backGen(x){


    if(x.name=="red"){
        red=x.value;
    }else if(x.name=="green"){
        green=x.value;
    }else{
        blue=x.value;
    }

    txt=`rgb(${red},${green},${blue})`

    display1.innerHTML=txt;
    display1.style.backgroundColor=txt;

}