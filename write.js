const fs = require('fs')
const { exit } = require('process')

const file = 'tools.json'
const tool = process.argv[2]
const score = process.argv[3]

fs.promises
  .readFile(file, { encoding: 'utf-8' })
  .then(onReadFileSucess)
  .then(onWriteSuccess)
  .catch(onError)

function onReadFileSucess(data) {
  const tools = err ? [] : JSON.parse(data)
  tools.push({ name: tool, score })
  return fs.promises.writeFile(file, JSON.stringify(tools), {
    encoding: 'utf-8',
  })
}

function onWriteSuccess() {
  exit(0)
}

function onError(error) {
  console.error(error)
}

// old style: with nested callbecks

// fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
//   err && exit(1)
//   const tools = err ? [] : JSON.parse(data)
//   tools.push({ name: tool, score })

//   fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
//     if (!err) {
//       tools.forEach(tool => console.log(tool.name + '\t' + tool.score))
//     }
//     exit(err ? 1 : 0)
//   })
//   console.log(tools)
// })
