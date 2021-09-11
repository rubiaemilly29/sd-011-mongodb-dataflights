const aerea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: aerea,
  totalVoosDomesticos: db.voos.count({ "empresa.nome": aerea, natureza: "Doméstica" }),
});

db.resumoVoos.find({ empresa: aerea }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });