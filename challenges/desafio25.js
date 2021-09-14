db.voos.deleteMany({ litrosCombustivel: { $lt: 300 }, "empresa.nome": "AZUL" });
