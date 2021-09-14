db.voos.find(
  {
    litrosCombustivel: { $lt: 600, $exists: true, $nin: ["GOL", "AZUL"], },
  },
  {
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
    _id: 0,
  },
).limit(1);
