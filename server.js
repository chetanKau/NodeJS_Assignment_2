const http = require('http')
const fs = require('fs')
const path=require('path')
// const PORT = 4200;


// const handleFileData = (request, response) => {
//     response.writeHead(200,{'content-type':'text/plain'})
//     const info = response.write("hey, It's me Chetan.")
//     console.log(info);
//     response.end()
// }

// const server = http.createServer(handleFileData);
// server.listen(PORT);


// fs.writeFileSync("newTask.txt","Hey, I'm Chetan.")

// const tasks=fs.readFileSync("newTask.txt",'utf-8')
// const taskList=tasks.split('\n')
// console.log(taskList);

// fs.writeFileSync("newFile.txt","hey,I'm newFile")

const PATH=path.basename("newFile.txt")
// fs.appendFileSync(PATH, "\n" + "hey new file")
fs.unlinkSync(PATH)
console.log("Unlink file successfull")