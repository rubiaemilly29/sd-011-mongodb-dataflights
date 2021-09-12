const empresaLatamAB = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ empresa: empresaLatamAB, 
totalVoosDomesticos: db.voos.count({ 
  "empresa.nome": empresaLatamAB, 
  natureza: "Doméstica" }), 
});

db.resumoVoos.findOne(
  { empresa: empresaLatamAB }, 
{ empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);