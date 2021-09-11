db.voos.findOne({ $and:
  [{ $nor: [{ "empresa.nome": { $eq: "GOL" } }, { "empresa.nome": { $eq: "AZUL" } }] },
  { litrosCombustivel: { $exists: true } },
  { litrosCombustivel: { $not: { $gt: 600 } } }] },
  { _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 });