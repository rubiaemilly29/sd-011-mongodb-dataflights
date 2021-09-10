db.resumoVoos.insertOne(
  { empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos.count({
    $and: [{ natureza: "Doméstica" },
    { "empresa.nome": "PASSAREDO" }] }) },
);
 
 db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
