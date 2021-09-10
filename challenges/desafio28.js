const company = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  { empresa: company,
totalVoosDomesticos: db.voos.count(
    { $and: [{ natureza: "Doméstica" }, { "empresa.nome": company }] },
) },
);
db.resumoVoos.findOne(
  { empresa: company }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);