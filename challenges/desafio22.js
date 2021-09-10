db.voos.find(
  {
    $and:
      [
        { "empresa.nome": { $in: ["AMERICAN AIRLINES", "DELTA AIRLINES"] } },
        { $and:
          [
            { "aeroportoOrigem.sigla": "SBGR" },
            { "aeroportoDestino.sigla": "KJFK" },
          ],
        },
    ],
  },
  {
    _id: 0,
    vooId: 1,
  },
).limit(1);
