// use("dataFlights");
db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos
    .find({
      $and: [
        { "empresa.nome": "LATAM AIRLINES BRASIL" },
        { natureza: "Doméstica" },
      ],
    })
    .count(),
});

// use("dataFlights");
db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
