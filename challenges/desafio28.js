const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({
  empresa: latam,
  totalVoosDomesticos: db.voos.find({
    natureza: "Doméstica",
    "empresa.nome": latam,
  }).count(),
});

db.resumoVoos.find({ empresa: latam }, { _id: 0 }).limit(1);
