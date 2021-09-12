db.voos.count({ $and: [
  { "empresa.nome": "GOL" },
  { "passageiros.pagos": { $lte: 10 } },
  { "passageiros.pagos": { $gte: 5 } },
] });
db.voos.deleteMany({ $and: [
  { "empresa.nome": "GOL" },
  { "passageiros.pagos": { $lte: 10 } },
  { "passageiros.pagos": { $gte: 5 } },
] });