const Koa = require('koa');

const app = new Koa();

app.listen(8085);

app.on('error', err => {
  log.error('server error', err)
});