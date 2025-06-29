
var a = 200;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("inner a:",a );
    
    
    
}
    // console.log(a);
    // console.log(b);
    // console.log(c);

function one() {
    const username = "Nishant";

    function two() {
        const website = " Youtube ";
        console.log(username);
    }
    // console.log(website);
    
    two();
}
// one();

// if (true) {
//     const username = " Kanha";
//     if (username=== " Kanha") {
//         let id = 22072004;
//         console.log(id + username);
//     }
//     // console.log(id);
// }

// console.log(username);//no scope of username here




//++++++++++++++++++++++++++++++ Interesting  +++++++++++++++++++++++++++++++++++++++



// console.log(addOne(6));  //Cannot access 'addtwo' before initialization

console.log(addtwo(5));
function addOne(num) {
    return num +1 ;
}


const addtwo = function(num) {
    return num + 2 ;
}




