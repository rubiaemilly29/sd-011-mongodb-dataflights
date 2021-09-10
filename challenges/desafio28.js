const company = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ empresa: company,
  totalVoosDomesticos: db.voos.find({ "empresa.nome": company,
  natureza: "Doméstica" })
 .count() });
db.resumoVoos.findOne({ empresa: company },
 { empresa: 1, totalVoosDomesticos: 1, _id: 0 });