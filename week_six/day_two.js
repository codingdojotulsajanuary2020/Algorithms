// for(var i = 0; i < 6; i++) {
//     console.log(i);
// }

console.log('-'.repeat(80));

function printToFive(num) {
    if(num > 5){
        console.log('recursion ended')
        return;
    } 
    console.log(num);
    console.log('still in recursion call')
    num++;
    printToFive(num);
    console.log('done with the recursion calls num is:', num);
}

printToFive(0);