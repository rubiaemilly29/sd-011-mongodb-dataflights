db.voos.find({ "aeroportoDestino.pais": { $eq: "ESTADOS UNIDOS" } }).count();
