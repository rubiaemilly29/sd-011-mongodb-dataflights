/* 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos. */
const TAM = "LATAM AIRLINES BRASIL"; 

db.resumoVoos.insert({
  empresa: TAM,
  totalVoosDomesticos: db.voos
    .find({ "empresa.nome": TAM, natureza: "Doméstica" })
    .count(),
});

db.resumoVoos.find(
  { empresa: TAM },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
