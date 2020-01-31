var schedule = require("node-schedule");
  /**
   * Criacao de Jobs
   *
   */
  global.object = {};
(exports.recreateJobs = async () => {
  // var object = {};

  try {
    return global.object;
  } catch (e) {}
}),
  /**
   * Compartilha Jobs
   * @param {*} object
   */
  (exports.getJobs = async object => {
    console.log(object)
    try {
      return object;
    } catch (e) {}
  }),
  (exports.cancelJob = async orderId => {
    console.log('--')
    console.log(orderId)
    // console.log(object)
    console.log('--')
    console.log(this.recreateJobs())
    console.log('--')
    try {
      return orderId;
    } catch (e) {}
  });

