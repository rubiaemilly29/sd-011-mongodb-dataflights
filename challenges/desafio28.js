// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: latam,
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": latam, natureza: "Doméstica" }).count() });
db.resumoVoos.findOne({ empresa: latam }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });