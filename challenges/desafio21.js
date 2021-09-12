db.voos.find(
    { $and: [{ litrosCombustivel: { $exists: true } }, { litrosCombustivel: { $gte: 1000 } }] },
    { _id: 0, vooId: 1 },
).limit(1);