const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();

router.get('/api/player',async ctx => {
  ctx.body = {
    code:0,
    data:[
      {
        firstName:"kyrie",
        lastName:"irving"
      },
      {
        firstName:"lebron",
        lastName:"jaems"
      }
    ]
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('app starting at port 3000');
})