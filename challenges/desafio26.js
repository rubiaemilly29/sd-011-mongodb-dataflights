db.voos.deleteMany(
  { $and: [{ "passageiros.pagos": { $lte: 10, $gte: 5 } }, { "empresa.nome": "GOL" }] },
);
