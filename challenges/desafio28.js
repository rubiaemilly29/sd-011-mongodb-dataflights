const empresaName = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: empresaName,
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": empresaName,
    natureza: "Doméstica",
  }).count(),
});

db.resumoVoos.findOne({ empresa: empresaName },
{ empresa: 1, totalVoosDomesticos: 1, _id: 0 });
