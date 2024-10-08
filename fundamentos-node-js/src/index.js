const express = require('express');

const app = express();

app.use(express.json());
// GET - Buscar uma informação no servidor
// POST - Inserir uma informação no servidor
// PUT - Alterar uma informação no servidor
// PATCH - Alterar uma informação específica
// DELETE - Deletar uma informação no servidor

/**
 * Tipos de parametros
 * 
 * Route Params => Identificar um recurso para editar / deletar / buscar
 * Query Params => Paginação / Filtro
 * Body Params => Objetos para inserção/alteração (JSON)
 */

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log('query', query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log('body', body);
    return response.json(["Curso 1","Curso 2","Curso 3","Curso 4",]);
});

app.put("/courses/:id", (request, response) => {
    const params = request.params;
    console.log('params', params);
    return response.json(["Curso 6","Curso 2","Curso 3","Curso 4",]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6","Curso 7","Curso 3","Curso 4",]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6","Curso 7","Curso 4",])
});

//localhost:3333
app.listen(3333);