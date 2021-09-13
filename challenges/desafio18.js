// 18 - Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos.
db.voos.findOne(
  { "passageiros.pagos": { $gt: 700 } },
  { _id: false, vooId: true, mes: true, ano: true },
);
