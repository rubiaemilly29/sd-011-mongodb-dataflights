db.voos.find(
  { 
    "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
    "aeroportoOrigem.sigla": "SBGR",
    "aeroportoDestino.sigla": "KJFK",
  },
).limit(1);
