const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
    { empresa: latam,
totalVoosDomesticos: db.voos.find({ natureza: "Doméstica", "empresa.nome": latam }).count() },
    );

db.resumoVoos.find({ empresa: latam }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
