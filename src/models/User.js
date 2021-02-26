const db = require('../db')
const { DataTypes } = require ('sequelize')

const User = db.define('User', {
  IdPersona: {
   type: DataTypes.INTEGER,
   allowNull: false,
   primaryKey: true,
   autoIncrement: true
  },
  Cedula: {
    type: DataTypes.STRING
  }, 
  Nombres: {
    type: DataTypes.STRING
  }, 
  Plan:{
    type: DataTypes.STRING
  }, 
  Carrera:{
    type: DataTypes.STRING
  }, 
  IdCarrera:{
    type: DataTypes.INTEGER
  }, 
  dia:{
    type: DataTypes.STRING
  }, 
  Desde:{
    type: DataTypes.DATE
  }, 
  Hasta:{
    type: DataTypes.DATE
  }, 
  MontoTotal:{
    type: DataTypes.BIGINT
  }, 
  TotalCuotas:{
    type: DataTypes.INTEGER
  }, 
  MontoCuota:{
    type: DataTypes.BIGINT
  }, 
  FechaActual:{
    type: DataTypes.STRING
  }, 
  MesActual:{
    type: DataTypes.INTEGER
  }, 
  AñoActual:{
    type: DataTypes.INTEGER
  }, 
  Paquete:{
    type: DataTypes.STRING
  }, 
}, {})

module.exports = User;