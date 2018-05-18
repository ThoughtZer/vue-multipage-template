var express = require('express')
var app = express()
var apiRoutes = express.Router()
var Mock = require('mockjs')

app.use(express.static('../dist'))

apiRoutes.get('/', function (req, res) {
  res.send('Hello Vue')
})

apiRoutes.get('/get', function (req, res) {
  var rsp = {
    'status': 0,
    'msg': 'success',
    data: Mock.mock('@string()')
  }
  return res.json(rsp)
})

apiRoutes.post('/post', function (req, res) {
  var rsp = {
    'status': 0,
    'msg': 'success',
    data: Mock.mock('@time("HH:mm:ss")')
  }
  return res.json(rsp)
})

app.use('/api', apiRoutes)

app.listen(3333)
