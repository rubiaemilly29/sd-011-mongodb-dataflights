const nomeEmpresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: nomeEmpresa,
  totalVoosDomesticos: db.voos.countDocuments({
    "empresa.nome": nomeEmpresa,
    natureza: "Doméstica", 
  }),
});

db.resumoVoos.findOne(
  { empresa: nomeEmpresa }, 
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
