db.voos.deleteMany({ $and: [{ "empresa.nome": "GOL" }, { passageiros: { $gte: 5, $lte: 10 } }] });
