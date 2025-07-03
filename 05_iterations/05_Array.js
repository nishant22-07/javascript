const coding = ["js", "ruby", "python", "java","cpp"];

// using arrow funtion
coding.forEach((val)=>{
    // console.log(val);
})

coding.forEach(function (value) {
    // console.log(value);
    
})

function printArray(params) {
    console.log(params);
    
}
// coding.forEach(printArray)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "Ruby",
        languageFileName : "rb"
    }    
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName} is in file ${item.languageFileName}`);
})