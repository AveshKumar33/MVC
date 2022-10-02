
const ejs=require('ejs');

exports.home=(req,res)=>{
        ejs.renderFile('./views/index.ejs',{},{},(err,template)=>{
            if(err){
                throw err;
            }
            else{
                res.send(template);
            }
        })
    }

exports.aboutus=(req,res)=>{
        ejs.renderFile('./views/aboutus.ejs',{},{},(err,template)=>{
            if(err){
                throw err;
            }
            else{
                res.end(template);
            }
        })
    }

    exports.employee=(req,res)=>{
        ejs.renderFile('./views/employee.ejs',{},{},(err,template)=>{
            if(err){
                throw err;
            }
            else{
                res.end(template);
            }
        })
    }    