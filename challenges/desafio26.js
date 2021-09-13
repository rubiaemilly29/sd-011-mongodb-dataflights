db.voos.find(
  { $and: [
    { "empresa.nome": { $eq: "GOL" } },
    { "passageiros.pagos": { $in: [5, 6, 7, 8, 9, 10] } },
  ] },
).count();

db.voos.deleteMany(
  { $and: [
    { "empresa.nome": { $eq: "GOL" } },
    { "passageiros.pagos": { $in: [5, 6, 7, 8, 9, 10] } },
  ] },
);
