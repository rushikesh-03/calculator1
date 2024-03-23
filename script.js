
console.log("HEY!! wELCOME TO THE CALCULATOR DEVELOPED BY RUSHIKESH ")

let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (a) =>
    {
        if(a.target.innerHTML == '='){
            str = eval(str);
            input.value = str;
        }

        else if(a.target.innerHTML == 'AC'){
            str = "";
            input.value = str;
        }
        else if(a.target.innerHTML == 'DEL'){
            str = string.substring(0, str.length-1);
            input.value = str;
        }
        else{
            str += a.target.innerHTML;
            input.value = str;
        }

       
    })
})