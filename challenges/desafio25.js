db.voos.count({ $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }] });
db.voos.deleteMany({ $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }] });