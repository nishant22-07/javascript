const coding = ["js", "ruby", "python", "java","cpp"];

// const values = coding.forEach( (item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values);

const numbers = [ 1,2,3,4,5,6,7,8,9,0];
// console.log(numbers.filter((item)=> { 
//     return item>4 
// }));

// console.log(numbers.filter((item)=> item>4));

const newNums = []

numbers.forEach((item)=>{
    if (item > 4 ) {
        newNums.push(item)
    }    
})
// console.log(newNums);

const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981,
edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
edition: 2008 },
{ title: 'Book Three', genre: 'History', publish: 1999,
edition: 2007 }, 
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
edition: 2010 },
{ title: 'Book Five', genre: 'Science', publish: 2009,
edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987,
edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986,
edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011,
edition: 2016 },
{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,
edition: 1989 },
]

let userBooks = books.filter((bk) => {
    if (bk.genre==="History") {
       return bk;
    }
})

 userBooks = books.filter((bk) => bk.publish>=1995 && bk.genre==="History")
console.log(userBooks);


