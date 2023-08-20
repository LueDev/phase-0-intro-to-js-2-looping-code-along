// Code your solutions in this file

function writeCards(arr, keyword){
    
    let arr2 = [];
    
    for(let i = 0; i < arr.length; i++){
        console.log(`Thank you, ${arr[i]}, for the wonderful ${keyword} gift!`);
        debugger;
        arr2.push(`Thank you, ${arr[i]}, for the wonderful ${keyword} gift!`);
    }

    return arr2;
}

// console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


function countDown(num){

    let firstExec = true;
    let i = num;
    for(let i = num ; i >= 0; i--){
        if(firstExec){  
            console.log(i);
            // console.log(`Expected countDown(${num}) to log ${num} first`);
            firstExec = false;}
        else {
            console.log(i);
            // console.log(`Expected countDown(${num}) to log ${i} after ${i+1}`);
            }
                           
        debugger;
    }
    return true;
}




