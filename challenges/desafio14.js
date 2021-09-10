db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIL" } },
{ decolagens: 1, _id: 0 }).count();
