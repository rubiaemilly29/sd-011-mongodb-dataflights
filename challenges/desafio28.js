use('dataFlights');
db.resumoVoos.insertMany([
  {  
   "empresa": "LATAM AIRLINES BRASIL",
   "totalVoosDomesticos": db.voos.find({ $and: [
    { "empresa.nome": { $eq: "LATAM AIRLINES BRASIL" } }, 
    {"natureza": { $eq: "Doméstica" } }] }).count()
   },
 ]);

db.resumoVoos.find({ empresa: { $eq: "LATAM AIRLINES BRASIL" } }, { empresa: 1, totalVoosDomesticos: 1, _id: 0})