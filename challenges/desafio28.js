const latam = "LATAM AIRLINES BRASIL"
db.resumoVoos.insertOne(
  { empresa: latam,
    totalVoosDomesticos: db.voos.count({
    $and: [{ natureza: "Doméstica" },
    { "empresa.nome": latam }] }) },
);
 
 db.resumoVoos.findOne(
   { empresa: latam },
   { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
