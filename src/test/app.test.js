const request = require('supertest');
const app = require('../index');

describe('GET /api/productos' ,()=>{

test("obtener todos los productos",async () =>{
    const response = await request(app).get('/api/productos').send();
    expect(response.statusCode).toBe(200);
 })

 test("obtener un solo producto",async () =>{
    const response = await request(app).get('/api/productos/4').send();
    expect(response.statusCode).toBe(200);
 })

});

describe('POST /api/productos',()=>{

     const vacio={};

     test("envio de datos vacios",async () =>{
        const response = await request(app).post('/api/productos').send(vacio);
        expect(response.statusCode).toBe(500);
     })


});

describe('DELETE /api/productos',()=>{
    test("eliminar un producto",async () =>{
        const response = await request(app).delete('/api/productos/9').send();
        expect(response.statusCode).toBe(200);
     })
});