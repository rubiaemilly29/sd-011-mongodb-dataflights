const totalVoosDomesticos = db.voos.count(
  { natureza: "Doméstica", "empresa.nome": "PASSAREDO" },
);
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos });
db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });