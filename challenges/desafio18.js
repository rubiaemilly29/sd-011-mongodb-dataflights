db.voos.find(
  { "passageiros.pagos": { $gt: 7000 } },
  { _id: 0 },
).limit(1);
