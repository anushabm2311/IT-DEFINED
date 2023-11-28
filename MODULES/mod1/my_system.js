let fs=require('fs')

// fs.writeFile('test2.txt','first file using node',(error,file)=>{
// 	if(error){
// 		console.log(error)
// 	}
// 	console.log("file has been created");
// });


fs.readFile('test2.txt',(error,file)=>{
	if(error){
		console.log(error)
	}
	console.log(file);
});
