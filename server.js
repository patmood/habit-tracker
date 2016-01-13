const koa = require('koa')
const route = require('koa-route')
const db = require('./db')

const app = koa()

// Log request times
app.use(function * (next) {
  const start = process.hrtime()
  yield next
  console.log(process.hrtime(start), this.request.path)
})

app.use(route.get('/', function * () {
  const journals = yield db.allJournals()
  const props = {
    journals: journals[0]
  }
  this.body = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Hello World</title>
      <link href="/basscss.min.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
      <div id="app"></div>
      <script>props=${JSON.stringify(props)}</script>
      <script src="/bundle.js"></script>
    </body>
  </html>
`
}))

// Static assets
if (process.env.NODE_ENV === 'production') {
  app.use(require('koa-static')('./public'))
} else {
  // Proxy to webpack
  const staticProxy = require('koa-proxy')({
    host: 'http://localhost:8080',
    map: (path) => '/public/' + path,
  })
  app.use(route.get('/:path', staticProxy))
}

const port = process.env.PORT || 7777
app.listen(port, () => console.info('🌎 Listening on ' + port))
