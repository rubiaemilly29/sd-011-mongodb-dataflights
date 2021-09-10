db.voos.findOne({ $and: [{ "aeroportoOrigem.sigla": { $eq: "SBGR", $eq: "KJFK" }},
{ $or: [{ "empresa.nome": "DELTA AIRLINES" }, 
{ "empresa.nome": "AMERICAN AIRLINES" } ]} ]}, { _id: 0, vooId: 1}); 