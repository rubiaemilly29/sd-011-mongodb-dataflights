// use("dataFlights");
db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos
    .find({
      $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }],
    })
    .count(),
});

// use("dataFlights");
db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
