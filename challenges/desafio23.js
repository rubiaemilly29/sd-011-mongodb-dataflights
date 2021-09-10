db.voos.findOne({ $and: [ { "litrosCombustivel": {$ne: {$gt: 1000}} }, {"litrosCombustivel": {$exists: true}}  ]  }, { "vooId": 1, "_id": 0, "litrosCombustivel": 1  })
