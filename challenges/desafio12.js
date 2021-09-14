db.voos.count({
    $and: [
        { "aeroportoDestino.pais": "BRASIL" },
        { "aeroportoDestino.pais": "ARGENTINA" },
        { "aeroportoDestino.pais": "CHILE" },
    ],
});

// db.voos.count({ $and: [{ "aeroportoDestino.pais": { $eq: "BRASIL" } }, { "aeroportoDestino.pais": { $eq: "ARGENTINA" } }, { "aeroportoDestino.pais": "CHILE" }] });
