db.voos.findOne(
    {
        $and: [
            {
                $or: [
                    { "empresa.nome": { $eq: "DELTA AIRLINES" } },
                    { "empresa.nome": { $eq: "AMERICAN AIRLINES" } }],
            },
            { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
            { "aeroportoDestino.sigla": { $eq: "KJFK" } },
        ],
    },
    { vooId: 1, _id: 0 },
);
