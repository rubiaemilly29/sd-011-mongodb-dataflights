db.voos.findOne({ $and: [ 
  { $or: [{ empresa: "DELTA AIRLINES" }, { empresa: "AMERICAN AIRLINES" }] },
  { "aeroportoOrigem.sigla": "SBGR" },
  { "aeroportoDestino.sigla": "KJFK" },
] },  
{ 
  vooId: 1,
  _id: 0,
});