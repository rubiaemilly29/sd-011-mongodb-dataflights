db.voos.find({ 
litrosCombustivel: { $lt: 600, },
"empresa.nome": { $in: ["GOL", "AZUL" ]},
},
{
_id: 0,
vooId: 1,
litrosCombustivel: 1,
}).limit(1);
