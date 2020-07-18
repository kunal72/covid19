const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const { endsWith } = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/covidDB", {useNewUrlParser: true ,useUnifiedTopology: true });


const postSchema = {
    Name: String,
    Address: String,
    Areacode:String,
    Tel:String,
    Fax:String,
    Phone:String,
    Emergency:String,
    Category:String,
    website:String
  };
  
  const Post = mongoose.model("Post", postSchema);

  app.get("/home", function(req,res){
         
    res.render("home")
     })

     app.post("/home", function(req, res){
  
        const post = new Post ({
            Name: req.body.postName,
            Address:req.body.postAdress,
            Areacode:req.body.postArea,
            Tel:req.body.postTel,
            Fax:req.body.postFax,
            Phone:req.body.postPhone,
            Emergency:req.body.postEmergency,
            Category:req.body.postCategory,
            website:req.body.postweb
        });
      
        post.save(function(err){
            if (!err){
                res.redirect("/");
            }
          });
         });
        
         app.get("/plasma", function(req,res){
         
          res.render("plasma")
          
           });
           

          //  app.post

           

            
    
       
    const donerSchema = {
              Name: String,
              Sex : String,
              Age :String,
              BloodGroup :String,
              EmailId :String,
              PhoneNumber:String,
              AdharCard :String

      
      
        };
              
      const Doner = mongoose.model("Doner", donerSchema);

      app.get("/doner", function(req,res){
         
        res.render("doner")
         })
    
         app.post("/doner", function(req, res){
      
            const doner = new Doner ({
              Name:req.body.postName,
             Sex :req.body.postSex,
             Age :req.body.postAge,
             BloodGroup :req.body.postBg,
             EmailId :req.body.postEmail,
             PhoneNumber:req.body.postPhone,
             AdharCard :req.body.postAd
            });
          
            doner.save(function(err){
                if (!err){
                    res.redirect("/plasma");
                }
              });
             });
              

             const patientSchema = {
              Name: String,
              Sex : String,
              Age :String,
              BloodGroup :String,
              City :String,
              EmailId :String,
              PhoneNumber:String,
              AdharCard :String

      
      
        };
              
      const Patient = mongoose.model("Patient", patientSchema);

             app.get("/patient", function(req,res){
         
              res.render("patient")
               });

               app.post("/patient", function(req, res){
      
                const patient = new Patient ({
                  Name:req.body.postName,
                 Sex :req.body.postSex,
                 Age :req.body.postAge,
                 BloodGroup :req.body.postBg,
                 City: req.body.postCity,
                 EmailId :req.body.postEmail,
                 PhoneNumber:req.body.postPhone,
                 AdharCard :req.body.postAd
                });
              
                patient.save(function(err){
                    if (!err){
                        res.redirect("/plasma");
                    }
                  });
                 });

                 app.get("/main", function(req,res){
         
                  res.render("main")
                  
                   })

                   
               
          app.get("/covid", function(req,res){
            res.render("covid")
            // res.redirect("http://127.0.0.1:8887/covid.html")
          })        
              


//           let port = process.env.PORT;
//           if (port == null || port == "") {
//             port = 3000;
//           }
//           app.listen(port);

//   app.listen(port, function() {
//     console.log("Server started");
//   })
let port = (process.env.PORT || '3000');
          app.listen(port, process.env.IP, function () {
            //  console.log(whatever)
          })
