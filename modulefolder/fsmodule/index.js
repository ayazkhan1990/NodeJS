const fs = require('fs');
// //============non bloking IO Modle
// fs.writeFile("file.txt", "Data writen by Ayaz khan", ()=>{
// console.log("Data is Successfully added");
// })
// console.log("Another data");


//============bloking IO Modle Write file with Sync
// const b= fs.writeFileSync("file1.txt", "Another data",)
//     console.log(b);
    
//     console.log("Another data");

//     //=========Read File
// fs.readFile("file.txt", "utf-8", (err, data)=>{
//     console.log(data);
// })

    // //=========Read File
    // fs.appendFile("file.txt", " Appand file ka data add", (err)=>{
    //     console.log("Succesfull");
    // })

    //  //========= File Name Rename 
    //  fs.rename("file.txt", "changefile.txt", (err)=>{
    //     console.log("Succesfull");
    // })

    //========= File delete
    fs.unlinkSync("file1.txt");
    