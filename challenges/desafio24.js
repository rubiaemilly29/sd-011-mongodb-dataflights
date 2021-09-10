db.voos.find({
  $and: [
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { litrosCombustivel: { $exists: true } },
    {
      $nor: [{ "empresa.nome": { $eq: "GOL" } }, { "empresa.nome": { $eq: "AZUL" } }],
    },
    ] }, {
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
  _id: 0,
}).limit(1);