const express = require("express")
const app = express()


app.get("/" , (req , res)=>{
   res.send("Hello guys"+ process.env.APP + "db name" + process.env.DB_Name);
})


app.listen(8000 , ()=>{
    console.log(`server started at port 3000`);
})