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

//BORDER RADIUS

var radius=[0,0,0,0,0],// ALL,TOP-L, TOP-R, BOTTOM-L, BOTTOM-R
    
    display4 = document.querySelector(".radiusResult");
    radiuses = document.querySelectorAll("input[name*='radius-']");

function radGen(x){

    switch(x.name){
        case "radius":
            for(var i=0; i<radius.length; i++)
            {
                radius[i]=parseInt(x.value);
            }

            for(var i=0; i<margins.length; i++){
                radiuses[i].value=x.value;
            }
            
        break;

        case "radius-top-left":
            radius[1]=parseInt(x.value);
        break;

        case "radius-top-right":
            radius[2]=parseInt(x.value);
        break;

        case "radius-bottom-left":
            radius[3]=parseInt(x.value);
        break;

        case "radius-bottom-right":
            radius[4]=parseInt(x.value);
        break;
        }

        display4.innerHTML=`border-radius: ${radius[1]}px ${radius[2]}px ${radius[4]}px ${radius[3]}px`;
        display4.style.borderRadius=`${radius[1]}px ${radius[2]}px ${radius[4]}px ${radius[3]}px`;
}


//SHADOW

display5 = document.querySelector(".shadowResult");

var h=0,
    v=0,
    b=0,
    s=0,
    shadowRed = 0,
    shadowGreen = 0,
    shadowBlue = 0,
    shadowOpacity = 1;

function shadGen(x){


    switch(x.name){
        case "horizontal":
            h=x.value;
        break;

        case "vertical":
            v=x.value;
        break;

        case "blur":
            b=x.value;
        break;

        case "spread":
            s=x.value;
        break;

        case "red":
            shadowRed=x.value;
        break;

        case "green":
            shadowGreen=x.value;
        break;

        case "blue":
            shadowBlue=x.value;
        break;

        case "opacity":
            shadowOpacity/=100;
            shadowOpacity=x.value;
        break;
    }

    display5.innerHTML=`box-shadow: ${h}px ${v}px ${b}px ${s}px rgba(${shadowRed}, ${shadowGreen}, ${shadowBlue}, ${shadowOpacity})`;
    display5.style.boxShadow=`${h}px ${v}px ${b}px ${s}px rgba(${shadowRed}, ${shadowGreen}, ${shadowBlue}, ${shadowOpacity} )`;


}


//BORDER

var border = [1,1,1,1,1], //ALL, TOP, BOTTOM, LEFT, RIGHT
    typeBorder = ["dotted","dotted","dotted","dotted","dotted"];//ALL, TOP, BOTTOM, LEFT, RIGHT
    display6 = document.querySelector(".borderResult");
    display6Text = document.querySelectorAll(".borderText"),

    allNum = document.querySelectorAll('[name="border-width"]');
    allType =  document.querySelectorAll('[name="type"]');
    

    function borGen(x){

        if(x.value>10){
            x.value=10;
        } else if(x.value<1){
            x.value=1;
        }

        
    switch(x.parentElement.id){

        case "border-all":

            if(x.name=="border-width"){
                for(var i = 0; i<border.length; i++){
                    border[i]=x.value;
                    allNum[i].value=x.value;
                }

            }else{
                for(var i = 0; i<typeBorder.length; i++){
                    typeBorder[i]=x.value;
                    allType[i].value=x.value;
                }
            }

            display6.style.border=`${border[0]}px ${typeBorder[0]} black`;
            display6Text[0].innerHTML=`border-top: ${border[0]}px ${typeBorder[0]} black;`;
            display6Text[1].innerHTML=`border-bottom: ${border[1]}px ${typeBorder[1]} black;`;
            display6Text[2].innerHTML=`border-left: ${border[2]}px ${typeBorder[2]} black;`;
            display6Text[3].innerHTML=`border-right: ${border[3]}px ${typeBorder[3]} black;`;

        break;


        case "border-top":
        
            if(x.name=="border-width"){
                    border[1]=x.value;
            }else{
                    typeBorder[1]=x.value;
            }

            display6.style.borderTop=`${border[1]}px ${typeBorder[1]} black`;
            display6Text[0].innerHTML=`border-top: ${border[0]}px ${typeBorder[0]} black;`;

        break;


        case "border-bottom":
        
            if(x.name=="border-width"){
                    border[2]=x.value;
            }else{
                    typeBorder[2]=x.value;
            }

            display6.style.borderBottom=`${border[2]}px ${typeBorder[2]} black`;
            display6Text[1].innerHTML=`border-bottom: ${border[1]}px ${typeBorder[1]} black;`;
            
        break;


        case "border-left":
        
            if(x.name=="border-width"){
                    border[3]=x.value;
            }else{
                    typeBorder[3]=x.value;
            }

            display6.style.borderLeft=`${border[3]}px ${typeBorder[3]} black`;
            display6Text[2].innerHTML=`border-left: ${border[2]}px ${typeBorder[2]} black;`;
            
        break;


        case "border-right":
        
            if(x.name=="border-width"){
                    border[4]=x.value;
            }else{
                    typeBorder[4]=x.value;
            }

            display6.style.borderRight=`${border[4]}px ${typeBorder[4]} black`;
            display6Text[3].innerHTML=`border-right: ${border[3]}px ${typeBorder[3]} black;`;
        break;


    }


}