db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pagos": { $gte: 400, $lte: 10 } }, 
{ acknowledged: 0 });
