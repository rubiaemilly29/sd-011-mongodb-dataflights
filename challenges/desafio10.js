db.voos.find({ $and: [{ "empresa.nome": "GOL" }, { ano: 2017 }] }).limit(10);
