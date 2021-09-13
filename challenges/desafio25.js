db.voos.deleteMany({ "empresa.nome": "AZUL",
litrosCombustivel: { $exists: true, $lt: 400 } }, { acknowledge: 0 });
