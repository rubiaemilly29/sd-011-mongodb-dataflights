const empresaName = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  { empresa: empresaName,
    totalVoosDomesticos: db.voos.count({
    $and: [{ natureza: "Doméstica" }, { "empresa.nome": empresaName }] }),
  },
);
db.resumoVoos.find(
  { empresa: empresaName }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
).limit(1);
