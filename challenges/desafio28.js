const LATAM = "LATAM AIRLINES BRASIL";

db.voos.count({
  $and: [
    { "empresa.nome": LATAM },
    { natureza: "Doméstica" },
  ],
});

db.resumoVoos.insertOne({ 
  empresa: LATAM, 
  totalVoosDomesticos: 20026 });

db.resumoVoos.find({
  empresa: LATAM,
}, {
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
}).limit(1);
