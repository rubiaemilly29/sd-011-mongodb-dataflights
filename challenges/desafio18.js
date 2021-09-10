use ("dataFlights");

db.voos.find({
  "passageiros.pagos": 7000
}, {
    _id: 0,
    vooId: 1,
    mes: 1,
    ano: 1,
});
