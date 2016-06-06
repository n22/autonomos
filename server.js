var express = require('express'),
    app     = express(),
    path    = require('path');
var sys = require('util');
var exec = require('child_process').exec;
var child;

//hamdi
var pub = __dirname+'/assets';
app.use(express.static(pub));
app.set('views', __dirname);
app.set('view engine', 'jade');
app.get('/', function(req, res){  
  res.render('index');
});
//ahmadi

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname + '/index.html'));    
// });

app.listen(1337)
console.log('1337 is the magic port');

 var adminRouter = express.Router();
 adminRouter.use(function(req,res,next){
   console.log(req.method,req.url);
   next();
 });
 adminRouter.get('/',function(req, res){
   res.send('I am the dashboard');
 });

 adminRouter.get('/users',function(req,res) {
   res.send('I show all the users!');

 });
 var sdnRouter = express.Router();
 sdnRouter.get('/:hw/:command',function(req,res){
  if (req.params.hw =="router") {
   if(req.params.command == 'start'){
    child = exec("sdn-router", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    });
     console.log('router start');
   }
   else if (req.params.command == 'stop') {
      console.log('router stop');
      child = exec("sdn-router-off", function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
   }
   else {
     return;
   };
  }
  else if (req.params.hw =="switch"){
    if(req.params.command == 'start'){
     child = exec("sdn-switch", function (error, stdout, stderr) {
     console.log('stdout: ' + stdout);
     console.log('stderr: ' + stderr);
     if (error !== null) {
       console.log('exec error: ' + error);
     }
     });
      console.log('switch start');
    }
    else if (req.params.command == 'stop') {
       console.log('switch stop');
       child = exec("sdn-switch-off", function (error, stdout, stderr) {
       console.log('stdout: ' + stdout);
       console.log('stderr: ' + stderr);
       if (error !== null) {
         console.log('exec error: ' + error);
       }
     });
    }
    else {
      return;
    };
  }
  else{
    return;
  };
 });

app.use('/admin',adminRouter);
app.use('/sdn',sdnRouter);