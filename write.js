const fs = require('fs')
const { exit } = require('process')

const file = 'tools.json'
const tool = process.argv[2]
const score = process.argv[3]

fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
  err && exit(1)
  const tools = err ? [] : JSON.parse(data)
  tools.push({ name: tool, score })

  fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
    if (!err) {
      tools.forEach(tool => console.log(tool.name + '\t' + tool.score))
    }
    exit(err ? 1 : 0)
  })
  console.log(tools)
})
