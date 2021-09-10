const firmaAerea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: firmaAerea,
  totalVoosDomesticos: (
    db.voos.find({
      $and: [{ "empresa.nome": firmaAerea }, { natureza: "Doméstica" }] }).count()),
    });

db.resumoVoos.find({
  empresa: firmaAerea,
}, {
  _id: 0,
}).limit(1);
