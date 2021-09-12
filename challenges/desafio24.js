db.voos.find(
{ $and: [{
$nor:
[{ litrosCombustivel: { $gt: 600 } },
{ "empresa.nome": { $in: ["GOL", "AZUL"] } }] },
{ litrosCombustivel: { $exists: true } },
] },
{ _id: 0, "empresa.nome": 1, litrosCombustivel: 1, vooId: 1 },
).limit(1);
