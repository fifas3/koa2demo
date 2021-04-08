import fs from'fs';
import path from'path';

// 读取页面文件内容 注意 toString()
function render(url) {
  return new Promise((resolve,reject)=>{
    fs.readFile(path.resolve(`./views/${url}`),(err,res)=>{
      if(err) reject(err);
      resolve(res.toString());
    });
  });
}

async function route(url){
  let view = '404.html';
  switch(url){
      case '/': view = '../view/index.html';break;
      case '/home' : view = '../view/home.html';break;
      case '/404': view = '../view/404.html';
      default :break;
  }
  // 读取 html 内容，并且返回
  const html = await render(view);
  return html;
}