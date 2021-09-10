db.voos.find({ "aeroportoDestino.pais": { $not: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } } }).count();
