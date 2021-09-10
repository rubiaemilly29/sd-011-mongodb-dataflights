const NOME_DA_EMPRESA = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertMany([
  {  
   empresa: NOME_DA_EMPRESA,
   totalVoosDomesticos: db.voos.find({ $and: [
    { "empresa.nome": { $eq:NOME_DA_EMPRESA } }, 
    { natureza: { $eq: "Doméstica" } }] }).count(),
   },
 ]);

db.resumoVoos.find({ empresa: { $eq: NOME_DA_EMPRESA } },
{ 
empresa: 1,
totalVoosDomesticos: 1,
_id: 0,
});
