const nomeEmpresa = "LATAM AIRLINES BRASIL";

db.voos.count(
  { $and: [
      { "empresa.nome": { $eq: nomeEmpresa } },
      { natureza: { $eq: "Doméstica" } },
    ],
  },
);

db.resumoVoos.insertOne({
  empresa: nomeEmpresa,
  totalVoosDomesticos: db.voos.count(
    { $and: [
        { "empresa.nome": { $eq: nomeEmpresa } },
        { natureza: { $eq: "Doméstica" } },
      ],
    },
  ),
});

db.resumoVoos.find(
  { empresa: { $eq: nomeEmpresa } },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
