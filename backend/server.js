const app=require("./app.js");
const dotenv=require("dotenv");
dotenv.config({path:"./config/config.env"});
const database=require("./config/database.js");
database();
app.listen(process.env.PORT,()=>{
    console.log(`listening on port http://localhost:${process.env.PORT}`);
})