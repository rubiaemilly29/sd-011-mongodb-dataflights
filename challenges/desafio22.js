db.voos.findOne({ $and: [
  { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
] },
  { _id: 0, vooId: 1 });
