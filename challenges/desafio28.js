const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertMany(
  [
  {  
  empresa, // o mesmo que "empresa": empresa
  totalVoosDomesticos: db.voos.find({ $and: [
    { "empresa.nome": { $eq: empresa } }, 
    { natureza: { $eq: "Doméstica" } }] }).count(),
  },
  ],
);

db.resumoVoos.find(
  { empresa: { $eq: empresa } },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);