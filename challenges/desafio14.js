// 14 - Retorne o total de voos em que o país de origem não seja BRASIL.

db.voos.find({ "aeroportoDestino.pais": { $ne: "BRASIL" } }).count();
