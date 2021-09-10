db.voos.find({ litrosCombustivel: { $gte: 1000 } }, { vooId: 1, _id: 0 }).sort().limit(1);
