// 1.
// const add=(a,b)=>{
//     console.log(a+b)
// }
// module.exports=add

// 2.
// module.exports=(a,b)=>{
//     console.log(a+b)
// }

//3. and 4.
// const add=(a,b)=>{
//     console.log(a+b);
// }
// const sub=(a,b)=>{
//     console.log(a-b);
// }
// const div=(a,b)=>{
//     console.log(a/b);
// }
// module.exports={add,sub,div}

//5.
// exports.add=(a,b)=>{
//     console.log(a+b);
// }
// exports.sub=(a,b)=>{
//     console.log(a-b);
// }
// exports.div=(a,b)=>{
//     console.log(a/b);
// }

const fs=require('node:fs')
const readableStream=fs.createReadStream('./fiel1.txt',{
    encoding:"utf-8",
    highWaterMark:2
})
const writetableStream=fs.createWriteStream('./file2:txt')
readableStream.on("data",(chunk)=>{
     console.log(chunk)
     writetableStream.write(chunk)
})