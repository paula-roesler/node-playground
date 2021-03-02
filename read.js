const fs = require('fs') // file system

module.exports = function read(path) {
  // log out text from file
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log(data.split('\n').length)
    }
  })
}
