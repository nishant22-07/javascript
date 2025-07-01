//for

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if ((element%2 ==0)) {
//         console.log(element);
        
//     }
    
// }

let array = [1,2,3,4,5,6];
// for (let i = 0; i <=10; i++) {
//     const element = array[i];
//     console.log(element);
    
// }


// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value : ${i}`);
    
//     for (let j = 0; j <=10; j++) {
//         const element = array[j];
//         console.log(`inner loop value : ${j} , outer loop value : ${i}`);
        
//     }
    
// }

// break and continue

for (let i = 0; i <= 20; i++) {
if (i == 5) {
    console.log(`detected 5 `);
    // break;
    continue;
}

    console.log(`value  of i is ${i}`);
}
