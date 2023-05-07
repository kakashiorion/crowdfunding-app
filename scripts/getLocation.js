const fs = require('fs')

const jsonData = require('./csvjson.json')

let states = []
let finalData = {}

jsonData.forEach((element) => {
  if (!states.includes(element.state)) {
    states.push(element.state)
  }
})

states.forEach((s) => {
  finalData[s] = []
})

jsonData.forEach((element) => {
  finalData[element.state].push({
    city: element.city,
    lat: element.lat,
    long: element.lng,
  })
})

// console.log(finalData)
fs.writeFile(
  'locationData.json',
  JSON.stringify(finalData),
  'utf8',
  function (err) {
    if (err) throw err
    console.log('complete')
  }
)
