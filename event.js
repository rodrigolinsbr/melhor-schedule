var schedule = require("node-schedule");
var scheduleJob = require("../schedulle/schedule")

console.log(scheduleJob)

exports.new = async (id)=>{
    //
    //console.log(scheduleCancelOrder);
    // let object = await scheduleCancelOrder.recreateJobs();
    let object = await scheduleJob.recreateJobs()
    console.log("whatch:" + object);
    var date = await new Date().getSeconds();
    var job = await schedule.scheduleJob(`${date + 1} * * * * *`, function() {
      console.log("Action jobId:" + id);
        
      delete object[id];
      // this.cancel();
      
    });
    object[id] = job;
    console.log(object)
    
  }
    // await scheduleCancelOrder.getJobs(object)
    this.new('1')
// this.new('2')
// this.new('3')



