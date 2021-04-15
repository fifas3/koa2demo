// const Sequelize = require('sequelize');
import Sequelize from "sequelize"
import config from "../resource/config.js"
//Sequelize 数据库管理



class MySequelize{
  sequelize = new Sequelize(config.database.DATABASE,config.database.USERNAME, config.database.PASSWORD, {
    host: config.database.HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
  });
}
var db = new MySequelize()
export default db;


// var _connection = function (){
//     var connection = mysql.createConnection({
//       host: config.database.HOST,
//       user: config.database.USERNAME,
//       password: config.database.PASSWORD,
//       database: config.database.DATABASE
//   });
//   connection.connect();
//   return connection;
// }

// var db = function (sql, parmas = null) {
//   // 获取数据库链接对象
//   var connection = _connection();
//   return new Promise(function (reject, resolve) {
//       // 执行SQL语句
//       connection.query(sql, parmas, function (error, results, fields) {
//           if (error) throw error;
//           reject(results);
//       });
//       // 关闭链接
//       connection.end();
//   })
// }
// export default db