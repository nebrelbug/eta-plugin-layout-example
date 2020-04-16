var express = require('express')
var app = express()
var Eta = require('eta')
var EtaInherit = require('./plugin-inheritance')

Eta.defaultConfig.plugins = [EtaInherit]
Eta.defaultConfig.cache = false

app.engine('eta', Eta.renderFile)
app.set('view engine', 'eta')
app.set('views', './views')

app.get('/', function (req, res) {
  res.render('index', {
    favorite: 'Eta'
  })
})

app.listen(3000, function () {
  console.log('listening to requests on port 3000')
})
