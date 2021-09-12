const latam = "LATAM AIRLINES BRASIL";
db.voos.count({ $and: [{ "empresa.nome": latam }, { natureza: "Doméstica" }] });
db.resumoVoos.insertOne({
  empresa: latam,
  totalVoosDomesticos: db.voos.count(
    { $and: [{ "empresa.nome": latam }, { natureza: "Doméstica" }] },
  ),
});
db.resumoVoos.findOne({ empresa: latam }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });