db.voos.findOne({ 
  $and: [ 
    { "litrosCombustivel": { $not: { $gt: 600 } } }, 
   {$or:
    [
      { "empresa.nome": { $not: { $eq: "GOL" } } }, 
      { "empresa.nome": { $not: { $eq: "AZUL" } } },
    ]},
  { litrosCombustivel: { $exists: true } },
  ]}, 
  { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 });
