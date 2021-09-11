const empresaAerea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({ empresa: empresaAerea,
totalVoosDomesticos:
db.voos.count({ "empresa.nome": empresaAerea, natureza: "Doméstica" }) });

db.resumoVoos.findOne({ empresa: empresaAerea },
{ _id: 0, empresa: 1, totalVoosDomesticos: 1 });