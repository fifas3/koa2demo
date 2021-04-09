import config from "./resource/config.js";
import { rview} from './router/index.js';
import Koa from "koa";
import bodyParser from "koa-bodyparser"
const app = new Koa();

app.use(bodyParser())
app.use(rview.routes()).use(rview.allowedMethods());

app.use(async ctx => {
  ctx.response.body = '<h1>404 Not Found</h1>'
});
console.log(`listening ${config.port}`)
app.listen(`${config.port}`)