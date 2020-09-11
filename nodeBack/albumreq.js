const IMAGES = require("./Images");
module.exports = (app)=>{
    app.get("/images",(req,res)=>{
        res.send(IMAGES);
    });

    app.get("/images/:id",(req,res)=>{
        res.send(IMAGES);
    });
};