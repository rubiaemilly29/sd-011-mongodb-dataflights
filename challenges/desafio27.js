const ciaAerea = "PASSAREDO";
db.resumoVoos.insertOne({
  empresa: ciaAerea,
  totalVoosDomesticos: db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }),
});

db.resumoVoos.find({ empresa: ciaAerea }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });