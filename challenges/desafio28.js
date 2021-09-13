const nomeDaEmpresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: nomeDaEmpresa,
  totalVoosDomesticos: db.voos.countDocuments({
    "empresa.nome": nomeDaEmpresa,
    natureza: "Doméstica",
  }),
});
db.resumoVoos.findOne({ empresa: nomeDaEmpresa }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });