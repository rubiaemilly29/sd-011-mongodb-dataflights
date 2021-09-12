db.voos.count(
  { $and: [
      { "empresa.nome": { $eq: "PASSAREDO" } },
      { natureza: { $eq: "Doméstica" } },
    ],
  },
);

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count(
    { $and: [
        { "empresa.nome": { $eq: "PASSAREDO" } },
        { natureza: { $eq: "Doméstica" } },
      ],
    },
  ),
});

db.resumoVoos.find(
  { empresa: { $eq: "PASSAREDO" } },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
