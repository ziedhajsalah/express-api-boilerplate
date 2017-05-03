const mongoose = require('mongoose')

module.exports = function () {
  mongoose.Promise = global.Promise
  mongoose.connect(process.env.MONGODB_URI)
  mongoose.connection
    .once('open', () => console.log('Mongodb connected!'))
    .on('error', (error) => console.log(error))
}
