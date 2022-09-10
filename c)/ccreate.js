const fs = require('fs');


const text = "Best Campus Cup Solution: UniWise, This app was developed by OGO Studio, Its category is Campus Cup Solution, Its institution represented is Buffalo City Public TVET College (BCC)"
            
fs.writeFile('c.txt', text, err =>{
    if(err){
        console.err;
        return;
    }
    console.log(text);
});