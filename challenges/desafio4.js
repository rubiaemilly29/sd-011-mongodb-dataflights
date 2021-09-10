// use('dataFlights')
db.voos.find({ "empresa.sigla": "GLO" }).count();
