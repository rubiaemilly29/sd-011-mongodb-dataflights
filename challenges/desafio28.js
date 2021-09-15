const empresaNome = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: empresaNome,
  totalVoosDomesticos: db.voos.find({ 
    natureza: "Doméstica", "empresa.nome": empresaNome, 
  }).count(),
});

db.resumoVoos.find({
  empresa: empresaNome,
}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });