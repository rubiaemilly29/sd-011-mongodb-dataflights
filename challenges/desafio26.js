db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pagos": { $gte: 5, $lt: 11 } });
