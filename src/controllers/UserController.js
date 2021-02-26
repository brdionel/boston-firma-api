// const User = require('../models/User');
// const db = require('../db')
const fs = require('fs')
const moment = require('moment')
moment.locale('es-do');  

const usuarios = [
  {
    IdPersona: 1,
    Cedula: '116680128',
    Nombres: 'HERNANDEZ SERRATO OLIVER DE JESUS',
    IdPensum: 432,
    Plan: 'Plan 2017 l Best English Program',
    Carrera: 'Best English Program',
    IdCarrera: 295,
    dia: 14,
    Desde: '2021-02-14T00:00:00.000Z',
    Hasta: '2022-05-14T00:00:00.000Z',
    MontoTotal: 554240,
    TotalCuotas: 16,
    MontoCuota: 34640,
    FechaActual: '2021-02-19',
    MesActual: 2,
    AñoActual: 2021,
    Paquete: 'Paquete Best + libros'
  },
  {
    IdPersona: 2,
    Cedula: '132132134',
    Nombres: 'VICENTE BRUNO DIONEL',
    IdPensum: 432,
    Plan: 'Plan 2017 O maior programa Brasileiro',
    Carrera: 'Maior programa brasileiro',
    IdCarrera: 293,
    dia: 1,
    Desde: '2021-02-14T00:00:00.000Z',
    Hasta: '2022-05-14T00:00:00.000Z',
    MontoTotal: 11240,
    TotalCuotas: 12,
    MontoCuota: 1640,
    FechaActual: '2021-02-19',
    MesActual: 2,
    AñoActual: 2021,
    Paquete: 'Paquete Best + libros'
  }
]

const UserController = {
  
   getById : async (req, res) => {
     const id = +req.params.id;
     if(id){
       try {
         const user = usuarios.find(item => id === item.IdPersona)

        // const result = await db.query('EXEC buscarUsuario :idUser', {
        //   replacements: {idUser: id},
        //   type: db.QueryTypes.SELECT
        // });
        // res.json(user)
        // console.log('chega')
        // var html = ''
        try {
          var html = fs.readFileSync('./src/contrato.html', 'utf8') 
          html = html.replace(/{{cedula}}/g, user.Cedula)
          html = html.replace(/{{nombre}}/g, user.Nombres)
          html = html.replace(/{{fechaActual}}/g, moment(user.FechaActual).day())
          html = html.replace(/{{mesActual}}/g, user.MesActual)
          html = html.replace(/{{añoActual}}/g, user.AñoActual)
          html = html.replace(/{{planAkademia}}/g, user.Plan)
          html = html.replace(/{{paquete}}/g, user.Paquete)
          html = html.replace(/{{montoTotal}}/g, user.MontoTotal)
          html = html.replace(/{{totalCuotas}}/g, user.TotalCuotas)
          html = html.replace(/{{montoCuota}}/g, user.MontoCuota)
          html = html.replace(/{{fechaDesde}}/g, moment(user.Desde).format('L'))
          html = html.replace(/{{fechaHasta}}/g, moment(user.Hasta).format('L'))
          html = html.replace(/{{diaHoy}}/g, moment(user.FechaActual).format('dddd'))
          html = html.replace(/{{fechaHoy}}/g, moment(user.FechaActual).format('LL'))
          console.log(html)
          console.log(typeof data)
          res.send(html)
        } catch(err){
          console.log(err)
        }
        
        // res.end(html)
      } catch (err){
        res.status(500).json({
          error: true,
          message: 'No se pudo obtener el usuario'
        })
      }
    } else {
      res.status(400).json({
        error: true,
        message: 'El id no es valido'
      })
    }
  }
}

module.exports = UserController;