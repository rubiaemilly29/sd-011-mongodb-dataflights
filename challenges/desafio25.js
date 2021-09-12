db.voos.deleteMany({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 400 } },
    { "empresa.nome": { $eq: "AZUL" } },
  ],
});
