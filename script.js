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

//MARGINS

var margin=[0,0,0,0,0],// ALL,TOP,BOTTOM,LEFT,RIGHT
    padding=[0,0,0,0,0],// ALL,TOP,BOTTOM,LEFT,RIGHT
    display2 = document.querySelector(".marginResult");
    margins = document.querySelectorAll("input[name*='margin-']");
    paddings = document.querySelectorAll("input[name*='padding-']");
function margGen(x){
    console.dir(margins)
    switch(x.name){
        case "margin":
            for(var i=0; i<margin.length; i++)
            {
                margin[i]=parseInt(x.value);
            }

            for(var i=0; i<margins.length; i++){
                margins[i].value=x.value;
            }
            
        break;

        case "margin-top":
            margin[1]=parseInt(x.value);
        break;

        case "margin-bottom":
            margin[2]=parseInt(x.value);
        break;

        case "margin-left":
            margin[3]=parseInt(x.value);
        break;

        case "margin-right":
            margin[4]=parseInt(x.value);
        break;
        //PADDING
        case "padding":
            for(var i=0; i<padding.length; i++)
            {
                padding[i]=parseInt(x.value);
            }

            for(var i=0; i<paddings.length; i++){
                paddings[i].value=x.value;
            }
        break;

        case "padding-top":
            padding[1]=parseInt(x.value);
        break;

        case "padding-bottom":
            padding[2]=parseInt(x.value);
        break;

        case "padding-left":
            padding[3]=parseInt(x.value);
        break;

        case "padding-right":
            padding[4]=parseInt(x.value);
        break;
    }


    display2.style.margin=`${margin[1]}px ${margin[4]}px ${margin[2]}px ${margin[3]}px`;
    display2.style.padding=`${padding[1]}px ${padding[4]}px ${padding[2]}px ${padding[3]}px`;
    
    
    document.querySelector(".text").innerHTML=`Margin: ${margin[1]}px ${margin[4]}px ${margin[2]}px ${margin[3]}px`;
    display2.innerHTML=`Padding: ${padding[1]}px ${padding[4]}px ${padding[2]}px ${padding[3]}px`;
    


}

//FONTS

var fonts = ["Arial", "Calibri", "Tahoma", "Papyrus", "Times New Roman", "Courier New"],
    display3 = document.querySelector(".fontResult");


function fontGen(){
    let fontProps = document.querySelectorAll(".fontGenerator > *");

    if(fontProps[3].value>72){
        fontProps[3].value=72;
    } else if(fontProps[3].value<1){
        fontProps[3].value=1;
    }

    display3.style.fontStyle=fontProps[0].value;
    display3.style.fontVariant=fontProps[1].value;
    display3.style.fontWeight=fontProps[2].value;
    display3.style.fontSize=fontProps[3].value+'px';
    display3.style.fontFamily=fontProps[4].value;

    document.querySelector(".fontCode").innerHTML=`
    font: ${fontProps[0].value} ${fontProps[1].value} ${fontProps[2].value} ${fontProps[3].value} ${fontProps[4].value}
    `;
}