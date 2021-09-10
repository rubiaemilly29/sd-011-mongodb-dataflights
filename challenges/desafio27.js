const AEREA = "PASSAREDO";
const voosPassaredo = db.voos.find({ 
  $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": AEREA },
] }).count();

db.resumoVoos.insertOne({ empresa: AEREA, totalVoosDomesticos: voosPassaredo });

db.resumoVoos.find({ empresa: AEREA }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
