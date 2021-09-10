db.voos.find({ ano: 2017, "empresa.nome": "GOL" }, {
  "empresa.nome": 1, 
  "aeroportoOrigem.nome": 1,
  "aeroportoDestino.nome": 1,
  mes: 1,
  ano: 1,
  _id: 0,
  vooId: 1,
}).limit(10);
