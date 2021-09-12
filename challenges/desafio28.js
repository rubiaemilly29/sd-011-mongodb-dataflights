const nomeEmpresa = "LATAM AIRLINES BRASIL";
const totalVoosDomesticos = db.voos.count(
  { natureza: "Doméstica", "empresa.nome": nomeEmpresa },
);
db.resumoVoos.insertOne({ empresa: nomeEmpresa, totalVoosDomesticos });
db.resumoVoos.find({ empresa: nomeEmpresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });