db.resumoVoos.insert({ empresa: "LATAM AIRLINES BRASIL",
totalVoosDomesticos: db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }) });

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" },
{ _id: 0, empresa: 1, totalVoosDomesticos: 1 });