import fs from'fs';
import Router from "koa-router";
import db from "../db/mysql.js"
import { sqlhome,sqladd } from "../db/sqllist.js"
import { parsePostData } from "../resource/PostUitl.js"
const rview = new Router();

rview.get('/getData', async (ctx, next) => {
  // ctx.response.body = '<h1>index page</h1>'
  let request = ctx.request;
  let req_query = request.query; // 获取格式化参数
  let req_querystring = request.querystring; 

  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;
  let obj = {
    req_query:req_query,
    req_querystring:req_querystring,
    ctx_query:ctx_query,
    ctx_querystring:ctx_querystring
  };
  //Symbol() ?
  console.log(req_query['name'])
  //sObj 执行select
  let sObj={
    "vtable":"newtable",
    "setsql":`name like '%${req_query['name']}%' or sexy like '%${req_query['sexy']}%'`
  }
  console.log(sqlhome(sObj))
  let data = await db(sqlhome(sObj))
  console.log(JSON.stringify(data))
  ctx.body = {
    "code": 200,
    "data": data,
    "mesg": 'ok'
  }
})

rview.get('/home', async (ctx, next) => {
  ctx.type='html'
  ctx.body=fs.createReadStream("./src/view/home.html")
})

rview.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>404 Not Found</h1>'
})
//ctx.render
rview.post('/addUser', async(ctx, next) => {
  let request = ctx.request;
  let query = ctx.request.body;
  let req_query = request.query;
  // ctx.body=query; 
   //let pastData=await parsePostData(ctx); //原生的解析，如果用koa-bodyparser 就直接从ctx.request.body 获取传值信息
   console.log(req_query)
   console.log(query)
   let addObj={
    "vtable":"newtable",
    "vcolumn":"name,sexy",
    // "setsql":`name like '%${query['name']}%' or sexy like '%${query['sexy']}%'`
    "setsql":`'${query['name']}','${query.sexy}'`
  }
  console.log(addObj)
  let postData = await db(sqladd(addObj))
  console.log(postData)
  ctx.body = {
    "code": 1,
    "data": postData,
    "mesg": 'ok'
  }
})


export {rview as rapi}