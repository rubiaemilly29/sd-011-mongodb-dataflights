db.voos.findOne({ $and: 
  [
  { litrosCombustivel: { $lte: 600 } },
  { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  { litrosCombustivel: { $exists: true } },
  ] }, { vooId: 1, _id: 0, litrosCombustivel: 1, "empresa.nome": 1 });
