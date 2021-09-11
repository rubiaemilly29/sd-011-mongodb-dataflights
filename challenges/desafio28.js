const companhiaAerea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: companhiaAerea,
  totalVoosDomesticos: db.voos.count({ "empresa.nome": companhiaAerea, natureza: "Doméstica" }),
});

db.resumoVoos.find({ empresa: companhiaAerea }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });