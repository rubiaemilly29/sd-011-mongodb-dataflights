db.voos.count().deleteMany({
  $and: [
    { "empresa.nome": "AZUL" },
    { litrosCombustivel: { $lt: 400 } },
  ],
});