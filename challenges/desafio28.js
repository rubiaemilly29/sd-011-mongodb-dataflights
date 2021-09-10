db.resumoVoos.insertOne(
  { empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: db.voos.count({
    $and: [{ natureza: "Doméstica" },
    { "empresa.nome": "PASSAREDO" }] }) },
);
 
 db.resumoVoos.findOne(
   { empresa: "LATAM AIRLINES BRASIL" },
   { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
