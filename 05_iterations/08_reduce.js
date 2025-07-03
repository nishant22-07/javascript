const mynums = [1,2,3,4,5]

// const mynumsTotal = mynums.reduce((acc,currVal) => {
//     console.log(`accumulator: ${acc} and current value: ${currVal} thus ${acc} + ${currVal} = ${acc+currVal}`);
    
//     return acc+ currVal;
// },0)
// console.log(mynumsTotal);

// const mytotal = mynums.reduce((acc,currVal) => {return acc + currVal},0);
// console.log(mytotal);


const my_shopping_cart = [
    {
        product : "trimmer",
        price : 1999 
    },
    {
        product : "shampoo",
        price : 299
    },
    {
        product : "soap",
        price : 99
    },
    {
        product : "Cards",
        price : 199
    },
    {
        product : "water bottle",
        price :88 
    }
]

const totalBill = my_shopping_cart.reduce((acc,item) => acc + item.price,0)
console.log(totalBill);
