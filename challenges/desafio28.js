const TAM = "LATAM AIRLINES BRASIL";

const totalVoosDomesticos = db.voos.count(
    { "empresa.nome": TAM,
    natureza: "Doméstica" },
);
  
db.resumoVoos.insert({ empresa: TAM, totalVoosDomesticos });
db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
