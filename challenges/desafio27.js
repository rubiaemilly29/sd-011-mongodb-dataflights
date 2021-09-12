const voosPASSAREDODom = db.voos
  .count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: "PASSAREDO", voosPASSAREDODom });

db.resumoVoos.find({}, { _id: 0, empresa: 1, voosPASSAREDODom: 1 });
