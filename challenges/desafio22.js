db.voos.findOne(
  { $or: [{
    "empresa.nome": "DELTA AIRLINES",
  },
  {
    "empresa.nome": "AMERICAN AIRLINES",
  }],
  $and: [{
    "aeroportoOrigem.sigla": { $eq: "SBGR" },
    "aeroportoDestino.sigla": { $eq: "KJFK" },
  }],
},
{
  vooId: 1,
  _id: 0,
},
);
