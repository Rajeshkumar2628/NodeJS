// const add=require('./add')
// add(2,4)
// add(4,7)
// add(15,43)
// console.log('Hello world from index.js')
// require('./person1')
// require('./person2')
// require('./iife')
// const Building = require('./building.js')
// const building1=new Building('House')
// console.log(building1.getName())
// building1.setName('Villa')
// console.log(building1.getName())
// const building2=new Building('House')
// console.log(building2.getName())
// require('./obje')

// const add=require('./math')
// add(2,6)

// const math=require('./math')
// math.add(2,6)
// math.sub(6,2)

// const {add,sub,div}=require('./math')
// add(2,8)
// sub(8,2)
// div(4,4)

// const db=require('./db.json')
// console.log(db)

// const path=require('node:path')
// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// console.log(path.format(path.parse(__filename)))
// console.log(path.format(path.parse(__dirname)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute('./math.js'))

// console.log(path.join('form1','form2','index.js'))
// console.log(path.join('/form1','form2','index.js'))
// console.log(path.join('/form1','//form2','index.js'))
// console.log(path.join('/form1','//form2','../index.js'))

// console.log(path.resolve('form1','form2','index.js'))
// console.log(path.resolve('/form1','form2','index.js'))
// console.log(path.resolve('/form1','//form2','index.js'))
// console.log(path.resolve('/form1','//form2','../index.js'))\



// const fs=require('node:fs')
// const readableStream=fs.createReadStream('./file1.txt',{
//     encoding:"utf-8",
//     highWaterMark:3

// })
// const writetableStream=fs.createWriteStream('./file2.txt')
// readableStream.on("data",(chunk)=>{
//     console.log(chunk)
//     writetableStream.write(chunk)
// })

// const fs = require('node:fs')
// const zlib = require('node:zlib')
// const zip = zlib.createGzip()
// const readableStream = fs.createReadStream('./file1.txt', {
//     encoding: 'utf-8',
//     highWaterMark: 2
// })
// readableStream.pipe(zip).pipe(fs.WriteStream('./file3.txt.zip'))




// const fs = require('node:fs')
// const zlib = require('zlib')
// const zip = zlib.createGzip()
// const readableStream = fs.createReadStream('./file1.txt', {
//     encoding: 'utf-8',
//     highWaterMark: 2
// })
// readableStream.pipe(zip).pipe(fs.WriteStream('./file3.txt.zip'))


// const http=require('node:http')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Context-type":"plain/text"})
//     res.end("Hello World")
// })
// server.listen(3001,()=>{
//     console.log("server is running on port 3001")
// })

// const http=require('node:http')
// const fs=require('node:fs')
// // const html=fs.readFileSync('./index.html','utf-8')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-type":"text/html"})
//     // res.end(html)
//     fs.createReadStream('./index.html').pipe(res)
// })
// server.listen(3001,()=>{
//     console.log("Server is running port 3001")
// })

//Routing in NodeJs
const http=require('node:http')
const server=http.createServer((req,res)=>{
    res.setHeader('Access-control-Allow-Origin','*')
     if(req.url==='/'){
        res.writeHead(200,{"Content-type":"text/plain"})
    res.end("Home page")
     }
     else if(req.url==='/about'){
        res.writeHead(200,{"Content-type":"text/plain"})
    res.end("About page")
     }
     else if(req.url==='/api'){
        res.writeHead(200,{"Content-type":"application/json"})
    res.end(JSON.stringify([{"name":"Adam","age":"10"},{"name":"John","age":"30"}]))
     }
     else{
        res.writeHead(404)
        res.end("Page Not Found")
    }
})
server.listen(3001,()=>{
    console.log("Server is running port 3001")
})