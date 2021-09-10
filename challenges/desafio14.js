// use("dataFlights");
db.voos
  .find({
    "aeroportoOrigem.pais": { $nin: ["BRASIL"] }
  })
  .count();
