const empresaLAB = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  { 
    empresa: empresaLAB,
    totalVoosDomesticos: db.voos.count(
      { "empresa.nome": empresaLAB, natureza: "Doméstica" },
    ),
  },
);

db.resumoVoos.findOne(
  { empresa: empresaLAB },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);