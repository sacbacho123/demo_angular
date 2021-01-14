//A1
const findOpppositeNumber = (n , inputNumber) =>{
    if (inputNumber > (n / 2)) 
    return (inputNumber - (n / 2)); 

return (inputNumber + (n / 2)); 
}

console.log(findOpppositeNumber(10,2)); 
//A2
const merge2String=(a,b)=>{
    srt1 = a.split("");
    srt2 = b.split("");
    leng = Math.min(a.length, b.length),
    result='';

    for( let i =0; i < leng; i++){
        result += a[i] + b[i];
    }

    return result;
}
console.log(merge2String('aaa','0123'));

const inputNumber = document.querySelector("#inputNumber")
const submitNumber = document.querySelector("#submitNumber")
const resultNumber = document.querySelector("#result")
let randomNumber = Math.floor(Math.random() * 10);
let count =0
console.log(randomNumber);
submitNumber.addEventListener('click',function(){
if(count <3){
    count++;
    if( Number(inputNumber.value) == randomNumber)
    {
        resultNumber.textContent = 'you win, please reload this page to play again'
        
    }
    else{
        resultNumber.textContent = `you loose, you have ${3-count} turn left`
    }
    
}else{
    resultNumber.textContent = 'Game over'
    location.reload();
}
})

