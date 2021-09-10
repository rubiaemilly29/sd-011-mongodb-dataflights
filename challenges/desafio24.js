db.voos.findOne(
  { litrosCombustivel: { $lte: 600, $exists: true }, 
  "empresa.nome": { $ne: ["GOL", "AZUL"] } },
  { vooId: true, _id: false, litrosCombustivel: true, "empresa.nome": true },
);