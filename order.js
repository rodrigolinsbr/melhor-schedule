var schedule = require("node-schedule");
var scheduleJob = require("./schedule");


exports.new = async (id, time) => {
  //
  //console.log(scheduleCancelOrder);
  // let object = await scheduleCancelOrder.recreateJobs();
  // let object = await scheduleJob.recreateJobs()
  // console.log("w" + global.object);
  let job = ''
  var date = await new Date().getSeconds();
  job = schedule.scheduleJob(`${time} * * * * *`, function() {  
    // peDeZebra()
    delete global.object[id];
    this.cancel();
    console.log(global.object)
  });

  if (job == null) {
    console.log("Job " + id + " create error!");    
  }

  global.object[id] = job;
  global.object.peDeZebrar = function(){
    
    cancelOrder("123")

  }
  console.log(global.object)


  return true;
}

function cancelOrder(id){
  console.log("Cancelando pedido "+id)
  return true
}

// await scheduleCancelOrder.getJobs(object)
this.new("1", 6);

// this.new("2", 6);
// this.new("3", 11);
// this.new("4", 7);
// this.new("5", 9);
// this.new("6", 10);
// this.new("7", 29);
// this.new("8", 6);
// this.new("9", 11);
// this.new("10", 17);
// this.new("11", 9);
// this.new("12", 11);
// this.new("13", 40);
// this.new("14", 23);
// this.new("15", 17);
// this.new("16", 7);
// this.new("17", 9);
// this.new("18", 20);
