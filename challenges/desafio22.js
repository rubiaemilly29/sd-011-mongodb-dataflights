db.voos.find({
    $and: 
    [{ $or:
         [{ "empesa.nome": "DELTA AIRLINES" },
          { "empesa.nome": "AMERICAN AIRLINES" },
          { "aeroportoOrigem.sigla": "SBGR" },
          { "aeroportoDestino.sigla": "KJFK" }] }] },
           { _id: 0, vooId: 1 }).limit(1);
