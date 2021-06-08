let screen=document.getElementById('screen');
//output screen value
let screenValue = '';
// select all buttons
buttons=document.querySelectorAll('button');
for(item of buttons){
    // call when  button is clicked
    item.addEventListener('click',(e)=>{
        // getting inner text of buttons
        buttonText=e.target.innerText;
        console.log("Button text is ",buttonText)

        // Now writing logic
        if (buttonText=='x'){
            buttonText = '*';
            screenValue +=buttonText;
            screen.value = screenValue;  
        }
        else if(buttonText=='='){
            screen.value = eval(screenValue);
        }
        else if(buttonText=='c'){
            screenValue='';
            screen.value =screenValue;
        }
       
        else{
            screenValue +=buttonText;
            screen.value = screenValue;
        }

    })
}