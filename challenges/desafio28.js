const empresaLatam = "LATAM AIRLINES BRASIL";
db.resumoVoos.insert({ empresa: empresaLatam, 
totalVoosDomesticos: db.voos.count({ 
"empresa.nome": empresaLatam, natureza: "Doméstica" }) });
db.resumoVoos.findOne({ empresa: empresaLatam }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });