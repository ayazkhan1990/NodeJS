const fs = require('fs');
//non bloking IO Modle
fs.writeFile("file.txt", "It is Sample Data", ()=>{
console.log("Data is Successfully added");
})
console.log("Another data");