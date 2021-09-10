db.voos.find({litrosCombustivel: {$lt: 1000},
litrosCombustivel: {$exists: true}}, {vooId: 1, litrosCombustivel: 1}).limit(1);
