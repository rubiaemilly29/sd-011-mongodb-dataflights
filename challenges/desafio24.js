db.voos.find({ $and: [
    { litrosCombustivel: { $lt: 600 } },
    { litrosCombustivel: { $exists: true } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
] }, { litrosCombustivel: 1, vooId: 1, "empresa.nome": 1, _id: 0 }).limit(1);
