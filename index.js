// const db = require('./src/db')
const server = require('./src/server')

// db.sync({ alter: true })
// .then(() => {
// })
server.listen(3000, () => {
  console.log('Server escuchando el puerto 3000')
})