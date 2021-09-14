db.voos.findOne({ 
  $and: [
    { "aeroportoOrigem.sigla": "SBGR" }, { "aeroportoDestino.sigla": "KJFK" },
    {
      $or: [
        { "empresa.nome": { $in: ["DELTA AIRLINE", "AMERICAN AIRLINES"] } },
      ],
    },
  ],
}, { vooId: 1, _id: 0 });
