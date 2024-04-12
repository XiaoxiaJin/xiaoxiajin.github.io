const numberInput=document.getElementById("number");
const convertBtn=document.getElementById("convert-btn");
const output=document.getElementById("output")


convertBtn.addEventListener('click',()=>{
  const intInput=parseInt(numberInput.value);
  if(isNaN(intInput)){
    output.innerText="Please enter a valid number"
  }else if(intInput<1){
    output.innerText="Please enter a number greater than or equal to 1"
  }else if(intInput>3999){
    output.innerText="Please enter a number less than or equal to 3999"
  }else{
    output.innerText="";
    convertFunction(intInput);
  }
})


const convertFunction=(intInput)=>{
  let outputString="";
  while(intInput>0){
    output.innerText=""
    if(intInput>=1000){
      outputString+="M";
      intInput-=1000;
    }else if(intInput>=900){
      outputString+="CM";
      intInput-=900;
    }else if(intInput>=500){
      outputString+="D";
      intInput-=500;
    }else if(intInput>=400){
      outputString+="CD";
      intInput-=400;
    }else if(intInput>=100){
      outputString+="C";
      intInput-=100;
    }else if(intInput>=90){
      outputString+="XC";
      intInput-=90;
    }else if(intInput>=50){
      outputString+="L";
      intInput-=50;
    }else if(intInput>=40){
      outputString+="XL";
      intInput-=40;
    }else if(intInput>=10){
      outputString+="X";
      intInput-=10;
    }else if(intInput>=9){
      outputString+="IX";
      intInput-=9;
    }else if(intInput>=5){
      outputString+="V";
      intInput-=5;
    }else if(intInput>=4){
      outputString+="IV";
      intInput-=4;
    }else if(intInput>=1){
      outputString+="I";
      intInput-=1;
    }
  }
  output.innerText += outputString;
}
