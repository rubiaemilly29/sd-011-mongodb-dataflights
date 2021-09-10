// use("dataFlights");
db.voos.deleteMany(
  {
    $and: [
      {
        litrosCombustivel: { $lt: 400 },
      },
      { "empresa.nome": "AZUL" },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    empresa: { nome: 1 },
    litrosCombustivel: 1,
  },
);
