const ltb = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ 
empresa: ltb,
totalVoosDomesticos: db.voos.count({ "empresa.nome": ltb, natureza: "Doméstica" }) });

db.resumoVoos.findOne({ empresa: ltb }, { _id: false });
