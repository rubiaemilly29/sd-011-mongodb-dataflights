const company = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: company,
  totalVoosDomesticos: db.voos.count({
    $and: [
      {
        "empresa.nome": "LATAM AIRLINES BRASIL",
      },
      {
        natureza: "Doméstica",
      },
    ],
  }),
});

db.resumoVoos.find({
  empresa: company,
},
{
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
});