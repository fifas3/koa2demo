import config from "./resource/config.js";
import { rapi} from './router/rapi.js';
import Koa from "koa";
import bodyParser from "koa-bodyparser"
import staticFiles from "koa-static"
import koaNunjucks  from "koa-nunjucks-2"
import path from "path"

const app = new Koa();

app.use(bodyParser())
app.use(rapi.routes()).use(rapi.allowedMethods());

// 指定 public目录为静态资源目录，用来存放 js css images 等
const __dirname = path.resolve(); 
app.use(staticFiles(__dirname+"/src/public"))

// 使用 koa-nunjucks-2 实例获得中间件
app.use(koaNunjucks({
  ext: 'html', // 使用HTML后缀的模板
  path: path.join(__dirname+"/src/public/template"), // 模板所在路径
  nunjucksConfig: { // nunjucks的配置
      trimBlocks: true
  }
}));


app.use(async ctx => {
  ctx.response.body = '<h1>404 Not Found</h1>'
  // await next();
});
console.log(`listening ${config.port}`)
app.listen(`${config.port}`)