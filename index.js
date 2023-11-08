const express = require("express");
const app = express();
const port  = 3035;
const cors = express("cors");
const {connection} = require("./config/db")
const Route = require("./route/employee_route")

app.use(express.json());

app.use(cors({
    
    origin:"*"
}))
app.use("/api",Route)
app.get("/",(req,res)=>{
    res.send("server is fine")
})

app.listen(port,async()=>{
    try{
        await connection();
        console.log('server is live on port no.',port)
    }
    catch(err){
        console.log(`server having some error on port no. ${port} and getting error ${err}`)
    }
})