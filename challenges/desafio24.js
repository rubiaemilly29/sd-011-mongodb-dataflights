db.voos.find({
    $and: [{ litrosCombustivel: { $gt: 600 } },
       { "empresa.nome": { $nin: ["Gol", "Azul"] } }] },
       { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 })
       .limit(1);
