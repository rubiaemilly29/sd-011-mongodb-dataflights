db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" }),
});

db.resumoVoos.find(
  {
    empresa: "PASSAREDO"
  },
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0
  }
);