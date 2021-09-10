const company = "PASSAREDO";

db.resumoVoos.insertOne({
  empresa: company,
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": company,
    natureza: "Doméstica", 
  }).count(),  
});

db.resumoVoos.findOne({ empresa: company }, { _id: 0 });