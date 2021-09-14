const companyName = "PASSAREDO";

db.resumoVoos.insertOne(
  { 
    empresa: companyName,
    totalVoosDomesticos: db.voos.find({ 
      $and: [{ "empresa.nome": companyName }, { natureza: "Doméstica" }] }).count(),
  },
);

db.resumoVoos.find({ empresa: companyName }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
