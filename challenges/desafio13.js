db.voos.find(
  { "aeroportoDestino.continente": { $not: { $in: ["EUROPA", "OCEANIA", "ÁSIA"] } } },
).count();
