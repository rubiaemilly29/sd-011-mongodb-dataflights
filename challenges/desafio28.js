const AEREA = "LATAM AIRLINES BRASIL";

const voosLATAM = db.voos.find({ 
  $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": AEREA },
] }).count();

db.resumoVoos.insertOne({ empresa: AEREA, totalVoosDomesticos: voosLATAM });

db.resumoVoos.find({ empresa: AEREA },
{ _id: 0, empresa: 1, totalVoosDomesticos: 1 });
