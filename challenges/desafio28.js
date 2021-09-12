const voosLATAMDom = db.voos
  .count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", voosLATAMDom });

db.resumoVoos.find({}, { _id: 0, empresa: 1, voosLATAMDom: 1 });
