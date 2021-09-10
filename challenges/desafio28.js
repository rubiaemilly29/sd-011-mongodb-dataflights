const LATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertMany([
  {  
  empresa: LATAM,
  totalVoosDomesticos: db.voos.find({ $and: [
    { "empresa.nome": LATAM }, 
    { natureza: { $eq: "Doméstica" } }] }).count(),
  },
]);

db.resumoVoos.find({ empresa: LATAM }, 
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 });