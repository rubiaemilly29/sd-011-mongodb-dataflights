db.resumoVoos.insertMany([
{  
empresa: "PASSAREDO",
totalVoosDomesticos: db.voos.find({ $and: [
{ "empresa.nome": { $eq: "PASSAREDO" } }, 
{ natureza: { $eq: "Doméstica" } }] }).count(),
},
]);
  
db.resumoVoos.find({
empresa: { $eq: "PASSAREDO" },
},
{ 
empresa: 1,
totalVoosDomesticos: 1,
_id: 0, 
});

db.resumoVoos.deleteMany({
empresa: { $eq: "PASSAREDO" },
});