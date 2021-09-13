db.voos.find(
  { $and: [
    { "empresa.nome": { $eq: "AZUL" } },
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 400 } }] },
).count();

db.voos.deleteMany(
  { $and: [
    { "empresa.nome": { $eq: "AZUL" } },
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 400 } },
  ],
},
);
