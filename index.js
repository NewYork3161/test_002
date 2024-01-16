const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const TheSchemaTables = require("./models/theSchemaTable");

mongoose.connect("mongodb+srv://mcompany4151:NewYork4151@cluster0.wj0zkmz.mongodb.net/new_db_test_500?retryWrites=true&w=majority")
.then(()=>{
  console.log("You  are connected to mongoose");

})
.catch(error=>{
  console.log(error);
});


const app =express();



const _portStringNumber = 3004;

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/p", async(req,res)=>{
const _p = await TheSchemaTables.find({});
res.render("index",{_p});

});


app.listen(_portStringNumber,(req,res)=>{

console.log("You are on port number",_portStringNumber);



});

