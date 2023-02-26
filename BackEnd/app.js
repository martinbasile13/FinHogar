const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('HOLA MUNDO')
})

//Crear un registo
app.post(`/ingreso`, async(req, res)=>{
    const {nombre, tipo, procedencia, frecuencia, monto} = req.body
    const ingresos = await prisma.ingresos.create({
        data: {
            nombre, tipo, procedencia, frecuencia, monto
        }
    })
    res.json(ingresos)
})

//Mostrar todos los registos
app.get(`/ingresos`, async(req, res)=>{
    const ingresos = await prisma.ingresos.findMany()
    res.json(ingresos)
})

//Actualizar un registro
app.put(`/ingreso/:id`, async(req, res)=>{
    const {id} = req.params
    const {nombre, tipo, procedencia, frecuencia, monto} = req.body
    const ingresos = await prisma.ingresos.update({
        where: {id: Number(id)},
        data: {nombre, tipo, procedencia, frecuencia, monto}
    })
    res.json(ingresos)
})

//Eliminar un registro
app.delete(`/ingreso/:id`, async(req, res)=>{
    const {id} = req.params
    const ingresos = await prisma.ingresos.delete({
        where: {id: Number(id)}
    })
    res.json('Ingreso Eliminado')
})

app.listen(3000, ()=>
    console.log(`Server ready at: http://localhost:3000`)
)