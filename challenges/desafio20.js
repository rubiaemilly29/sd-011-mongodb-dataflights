db.voos.find({ litrosCombustivel: { $exists: false } }, { vooId: 1, _id: 0 }).limit(1);
