db.resumoVoos.insert(
  { empresa: "PASSAREDO", 
  totalVoosDomesticos: db.voos.count(
    { $and: [{ natureza: "Doméstica" }, { "empresa.nome": "PASSAREDO" }] },
) },
);
db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
