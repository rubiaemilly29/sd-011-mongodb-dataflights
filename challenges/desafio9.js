db.voos.find({ $and: [  {"ano": {$lte: 2018}}, {"ano": {$gte: 2017}}  ]  }).count();
