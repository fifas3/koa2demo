import mysql from "mysql2" // 后期从mysql 修改成mysql2，修改后没有测试
import config from "../resource/until.js"

var pool = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
})

class Mysql {
  constructor () {

  }
 
  query () {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * from newtable', function (error, results, fields) {
          if (error) {
              throw error
          };
          resolve(results)
          // console.log('The solution is: ', results[0].solution);
      });
    })
     
  }
  addinfo(obj){
    return new Promise((res,rej)=>{
      console.log(JSON.stringify(obj))
      pool.query("insert into newtable(name,sexy) values ('"+obj.name+"','"+obj.sexy+"')", function (error, results, fields) {
        if (error) {
          throw error
        }
        res(results)
      })
    })
  }
}
var sqlInfo = new Mysql()
export default sqlInfo
// module.exports =  Mysql()