db.resumoVoos.insert({
  empresa: "LATAM AIRLINES BRASIL", 
  totalVoosDomesticos: db.voos.count(
    {
      natureza: "Doméstica",
      "empresa.nome": "LATAM AIRLINES BRASIL",
    },
) });

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: false }).limit(1);