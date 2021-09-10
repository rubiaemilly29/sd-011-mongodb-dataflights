const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertMany([
  {  
  empresa: latam,
  totalVoosDomesticos: db.voos.find({ $and: [
    { "empresa.nome": { $eq: latam } }, 
    { natureza: { $eq: "Doméstica" } }] }).count(),
  },
]);

db.resumoVoos.find({ empresa: { $eq: latam } },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
