db.voos.find({
  litrosCombustivel: { $not: { $gt: 1000 }, $exists: true },
}, { 
vooId: 1,
litrosCombustivel: 1, 
_id: 0,
})
.limit(1);
