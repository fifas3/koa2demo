
//Sequelize 数据库管理
// import Sequelize from "sequelize"
// import config from "../resource/config.js"


// const sequelize = new Sequelize(config.database.DATABASE,config.database.USERNAME, config.database.PASSWORD, {
//   host: config.database.HOST,
//   dialect: 'mysql',
//   pool: {
//       max: 5,
//       min: 0,
//       idle: 30000
//   }
// });
//define 第一个参数表，会自动加一个s ，newtablea变成newtableas
// var Pet = sequelize.define('newtablea', {
//   id: {
//       type: Sequelize.STRING(50),
//       primaryKey: true
//   },
//   name: Sequelize.STRING(255) ,
//   sexy: Sequelize.STRING(255),
//   createdAt: Sequelize.BIGINT
// }, {
//       timestamps: false
//   });
// export {Pet as db}