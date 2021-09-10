// 15 - Retorne o total de voos com mais de 20 decolagens.

db.voos.count({ "aeroportoOrigem.pais": { $ne: "BRASIL" } });
