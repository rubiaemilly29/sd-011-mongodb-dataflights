const NOME = "LATAM AIRLINES BRASIL";
const TOTAL = db.voos.count({ "empresa.nome": NOME, natureza: "Doméstica" });

db.resumoVoos.insertOne({
  empresa: NOME,
  totalVoosDomesticos: TOTAL,
});

db.resumoVoos.find({ empresa: NOME }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });