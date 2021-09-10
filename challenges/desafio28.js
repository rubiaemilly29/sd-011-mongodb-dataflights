const empresaaerea = "LATAM AIRLINES BRASIL";
db.resumoVoos.insert({
  empresa: empresaaerea, 
  totalVoosDomesticos: db.voos.count(
    {
      natureza: "Doméstica",
      "empresa.nome": empresaaerea,
    },
) });

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: false }).limit(1);