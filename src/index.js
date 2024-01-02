const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000
const blogRoutes = require("./routes/blog");

app.use("/blogs", blogRoutes);

app.use(bodyParser.json());

app.listen(PORT , ()=>{
    console.log("Server is listening");
});