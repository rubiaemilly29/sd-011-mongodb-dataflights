const ciaName = "LATAM AIRLINES BRASIL";

db.voos.find({
  $and: [
    { "empresa.nome": ciaName },
    { natureza: "Doméstica" },
  ],
}).count();

db.resumoVoos.insertOne({
  empresa: ciaName,
  totalVoosDomesticos: 20026,
});

db.resumoVoos.find({
  empresa: ciaName,
}, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
});
