db.voos.find({
  litrosCombustivel: { $not: { $gt: 600 }, $exists: true },
  "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } },
}, { 
vooId: 1,
"empresa.nome": 1,
litrosCombustivel: 1, 
_id: 0,
})
.limit(1);
