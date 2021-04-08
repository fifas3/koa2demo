import fs from'fs';
import Router from "koa-router";

import sqlInfo from "../db/mysql.js"
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
  
  let data = await sqlInfo.query()
  console.log(JSON.stringify(data))
  ctx.body = {
    "code": 1,
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

rview.post('/addUser', async(ctx, next) => {
  let request = ctx.request;
  let query = ctx.request.body;
  let req_query = request.query;
  // ctx.body=query; 
  // let pastData=await parsePostData(ctx); 原生的解析，如果用koa-bodyparser 就直接从ctx.request.body 获取传值信息
 
  let postData = await sqlInfo.addinfo(query)
  // console.log(postData)
  ctx.body = {
    "code": 1,
    "data": postData,
    "mesg": 'ok'
  }
})
// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end",function(){
        let parseData = parseQueryStr( postdata )
        resolve( parseData )
      })
    } catch ( err ) {
      reject(err)
    }
  })
}
 
// 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  // console.log( queryStrList )
  for ( let [ index, queryStr ] of queryStrList.entries() ) {
    let itemList = queryStr.split('=')
    queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
  }
  return queryData
}

export {rview}