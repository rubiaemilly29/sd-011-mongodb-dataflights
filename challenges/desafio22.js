db.voos.findOne({ 
  $and: 
  [
    { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
    { "aeroportoDestino.sigla": { $eq: "KJFK" } }, 
      { $or: 
      [
        { "empresa.nome": { $eq: "DELTA AIRLINES" } },
        { "empresa.nome": { $eq: "AMERICAN AIRLINES" } },
      ] },
  ] },
{ vooId: 1, _id: 0 });
