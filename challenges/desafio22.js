db.voos.find({
  $and: [
    { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
    { "aeroportoDestino.sigla": { $eq: "KJFK" } },
    {
      $or:
[
{ "empresa.nome": { $eq: "DELTA AIRLINES" } },
{ "empresa.nome": { $eq: "AMERICAN AIRLINES" } },
],
    },
  ],
}).limit(1);
