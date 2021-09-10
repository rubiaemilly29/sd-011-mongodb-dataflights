const AIRLINE = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: AIRLINE,
  totalVoosDomesticos: db.voos.count({
    $and: [{ "empresa.nome": AIRLINE },
    { natureza: "Doméstica" },
    ],
  }),
});

db.resumoVoos.find({
  empresa: AIRLINE,
}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1);
