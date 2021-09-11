db.voos.delete({ $and: [{ "empresa.nome": "AZUL" },
{ litrosCombustivel: { $exists: true } }] });
