require('dotenv').config()
const {Sequelize} = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const db = new Sequelize(`boston`, 'sa', `bostonferre`, {
  dialect : 'mssql',
  host: `localhost`
})

async function test(){
  try{
    await db.authenticate()
    console.log('Conexiòn a la base de datos exitosa')
  } catch(err){
    console.log('no se conecto')
    console.log(err)
  }
}

test();

module.exports = db;