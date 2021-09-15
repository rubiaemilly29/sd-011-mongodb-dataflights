db.voos.count({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } });

// Outra maneira: db.voos.count({ $nor: [{ "aeroportoDestino.continente": { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } } ] });