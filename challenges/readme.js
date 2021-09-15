// 12 - Retorne a quantidade de documentos em que o campo aeroportoDestino.pais seja igual a BRASIL, ARGENTINA ou CHILE.
// 13 - Retorne a quantidade de documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
// 14 - Retorne o total de voos em que o país de origem não seja BRASIL.
// 15 - Retorne o total de voos com mais de 20 decolagens.
// 16 - Retorne o total de voos em que o campo natureza possui o valor Internacional.
// 17 - Retorne o total de voos em que o campo natureza possui o valor Doméstica.
// 18 - Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos.
// 19 - Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista.
// 20 - Retorne o vooId do primeiro voo em que o campo rtk não exista.
// 21 - Retorne o vooId do primeiro voo em que o campo litrosCombustivel seja maior ou igual a 1000.
// 22 - Retorne o vooId do primeiro voo em que a empresa seja DELTA AIRLINES ou AMERICAN AIRLINES, a sigla do aeroporto de origem seja SBGR e a sigla do aeroporto de destino seja KJFK.
// 23 - Retorne o vooId e litrosCombustivel do primeiro voo em que o campo litrosCombustivel não seja maior do que 1000 e o campo litrosCombustivel exista.
// 24 - Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que litrosCombustivel não seja maior do que 600 e a empresa não seja GOL ou AZUL, e o campo litrosCombustivel exista.
// 25 - Remova todos os voos da empresa AZUL em que a quantidade de combustível seja menor do que 400. Informe a quantidade de documentos removidos.
// 26 - Remova todos os voos da empresa GOL em que a quantidade de passageiros pagos esteja entre 5 e 10, incluindo os casos em que a quantidade é 5 e 10. Informe a quantidade de documentos removidos.
// 27 - Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO possui, via uso de uma nova coleção chamada resumoVoos.
// Ou seja, a coleção resumoVoos conterá documentos onde cada um indica para cada empresa a quantidade total de voos que ela possui de natureza Doméstica.

// Para isso, escreva no arquivo desafio27.js duas queries, nesta ordem:

// Conte quantos voos da empresa PASSAREDO cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja PASSAREDO.

// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
// Para isso, escreva no arquivo desafio28.js duas queries, nesta ordem:

// Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja LATAM AIRLINES BRASIL.
