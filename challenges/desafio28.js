/* 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos. */
db.resumoVoos.insert({empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: db.voos.find({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica"}).count()});

db.resumoVoos.find({empresa: "LATAM AIRLINES BRASIL"},{empresa:1, totalVoosDomesticos: 1, _id: 0});