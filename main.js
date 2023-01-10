const fs = require('fs');
const express = require("express");
const { resourceLimits } = require('worker_threads');
const app = express();

  
app.use(express.json());

app.use(express.urlencoded());
app.use(express.static('public'));

app.get("/post", (req, res) => {
  
    res.sendFile(__dirname + '/src/App.js');
});

app.post('/postForm', (req,res)=>{
    console.log(req.body);
    
   var data = [req.body]
    try{

   
        
    // Create CSV
    let csv = '';
    csv += 'firstName,lastName,Email,Phone,date\n';
    data.forEach(function(user) {
        csv += `${user.firstname},${user.lastName},${user.email},${user.pnumber},${user.dob}\n`;
    });
 
    // Write file
    fs.appendFile('users.csv', csv, 'utf8', function(err) {
        if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
        } else{
            console.log('It\'s saved!');
        }     
     
        
        res.redirect("/src/App.js");

    });
 } catch(error){
        console.log(error);
    }
   

  });


  
const PORT = process.env.PORT || 8080;
  
app. listen(PORT, console.log(`Server started on port ${PORT}`));