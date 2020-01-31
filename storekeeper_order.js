var scheduleJob = require("./order.js");
var schedule = require("node-schedule");

setInterval(function() {
  console.log("--");console.log(JSON.stringify(global.object));console.log("--");
}, 2000);

setTimeout(function() {
    // console.log(global.object);
    console.log('###')
    console.log('Delete job 1')
    console.log('###')
    try{global.object['1'].cancel()}catch(e){
        console.log(e)
    }
    delete global.object['1']
  }, 14000)


