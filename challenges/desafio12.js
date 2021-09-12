db.voos.count(
    { "aeroportoDestino.país": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } },
);
