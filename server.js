const koa = require('koa')
const route = require('koa-route')

const app = koa()

// Log request times
app.use(function * (next) {
  const start = process.hrtime()
  yield next
  console.log(process.hrtime(start), this.request.path)
})

app.use(route.get('/', function * () {
  this.body = 'hello'
}))

app.listen(7777, () => console.info('🌎 Listening on 7777'))
