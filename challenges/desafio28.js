db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.count({ natureza: "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" }),
});

db.resumoVoos.find(
  {
    empresa: "LATAM AIRLINES BRASIL"
  },
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0
  }
);