db.voos.find(
{ $and: [{ 
$nor:
[{ litrosCombustivel: { $gt: 1000 } }] },
{ litrosCombustivel: { $exists: true } }] },
{ _id: 0, litrosCombustivel: 1, vooId: 1 },
).limit(1);
