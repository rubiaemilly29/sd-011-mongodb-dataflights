const empAerea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({ empresa: empAerea,
totalVoosDomesticos: db.voos.count({ "empresa.nome": empAerea, natureza: "Doméstica" }) });

db.resumoVoos.findOne({ empresa: empAerea }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });