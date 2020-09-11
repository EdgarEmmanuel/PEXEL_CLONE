var express = require("express");
var cors = require("cors");
var app = express();

var corsOptions={
    option:["http://localhost:4200"]
}

app.use(cors(corsOptions));


app.get("/",(req,res)=>{
    console.log("server listening on port 3000");
});

require("./albumreq.js")(app);

app.listen(3000);