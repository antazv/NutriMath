function calcular() {
    const arroz = document.getElementById('arroz').value;
    const feijao = document.getElementById('feijao').value;
    const frango = document.getElementById('frango').value;
    const macarrao = document.getElementById('macarrao').value;

    const alimentos = [
        { nome: 'Arroz', calorias: 1.3, proteina: 0.027, carboidratos: 0.28, gorduras: 0},
        { nome: 'Feijão', calorias: 1.4, proteina: 0.09, carboidratos: 0.22, gorduras: 0.05 },
        { nome: 'Frango', calorias: 2.39, proteina: 0.27, carboidratos: 0, gorduras: 0.14 },
        { nome: 'Macarrão', calorias: 1.5, proteina: 0.035, carboidratos: 0.27, gorduras: 0.011 },
    ];

    let totalCalorias = 0;
    let totalProteinas = 0;
    let totalCarboidratos = 0;
    let totalGorduras = 0;

    const caloriasArroz = arroz * alimentos[0].calorias;
    const proteinaArroz = arroz * alimentos[0].proteina;
    const carboidratosArroz = arroz * alimentos[0].carboidratos;
    const gordurasArroz = arroz * alimentos[0].gorduras;

    const caloriasFeijao = feijao * alimentos[1].calorias;
    const proteinaFeijao = feijao * alimentos[1].proteina;
    const carboidratosFeijao = feijao * alimentos[1].carboidratos;
    const gordurasFeijao = feijao * alimentos[1].gorduras;

    const caloriasFrango = frango * alimentos[2].calorias;
    const proteinaFrango = frango * alimentos[2].proteina;
    const carboidratosFrango = frango * alimentos[2].carboidratos;
    const gordurasFrango = frango * alimentos[2].gorduras;

    const caloriasMacarrao = macarrao * alimentos[3].calorias;
    const proteinaMacarrao = macarrao * alimentos[3].proteina;
    const carboidratosMacarrao = macarrao * alimentos[3].carboidratos;
    const gordurasMacarrao = macarrao * alimentos[3].gorduras;

    totalCalorias = caloriasArroz + caloriasFeijao + caloriasFrango + caloriasMacarrao
    totalProteinas = proteinaArroz + proteinaFeijao + proteinaFrango + proteinaMacarrao
    totalCarboidratos = carboidratosArroz + carboidratosFeijao + carboidratosFrango + carboidratosMacarrao
    totalGorduras = gordurasArroz + gordurasFeijao + gordurasFrango + gordurasMacarrao

    console.log(arroz)
    console.log(caloriasArroz, proteinaArroz, carboidratosArroz, gordurasArroz)
    console.log(feijao)
    console.log(caloriasFeijao, proteinaFeijao, carboidratosFeijao, gordurasFeijao)
    console.log(frango)
    console.log(caloriasFrango, proteinaFrango, carboidratosFrango, gordurasFrango)
    console.log(macarrao)
    console.log(caloriasMacarrao, proteinaMacarrao, carboidratosMacarrao, gordurasMacarrao)
    console.log(totalCalorias, totalProteinas, totalCarboidratos, totalGorduras)

    const tabela = document.getElementById('tabela-resultados').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // limpa a tabela

    const arrozRow = tabela.insertRow();
    const arrozNomeCell = arrozRow.insertCell(0);
    const arrozCaloriasCell = arrozRow.insertCell(1);
    const arrozProteinaCell = arrozRow.insertCell(2);
    const arrozCarboidratosCell = arrozRow.insertCell(3);
    const arrozGordurasCell = arrozRow.insertCell(4);

    arrozNomeCell.innerHTML = 'Arroz';
    arrozCaloriasCell.innerHTML = arredondar(caloriasArroz, 2);
    arrozProteinaCell.innerHTML = arredondar(proteinaArroz, 2);
    arrozCarboidratosCell.innerHTML = arredondar(carboidratosArroz, 2);
    arrozGordurasCell.innerHTML = arredondar(gordurasArroz, 2);
    
    const feijaoRow = tabela.insertRow();
    const feijaoNomeCell = feijaoRow.insertCell(0);
    const feijaoCaloriasCell = feijaoRow.insertCell(1);
    const feijaoProteinaCell = feijaoRow.insertCell(2);
    const feijaoCarboidratosCell = feijaoRow.insertCell(3);
    const feijaoGordurasCell = feijaoRow.insertCell(4);

    feijaoNomeCell.innerHTML = 'Feijão';
    feijaoCaloriasCell.innerHTML = arredondar(caloriasFeijao, 2);
    feijaoProteinaCell.innerHTML = arredondar(proteinaFeijao, 2);
    feijaoCarboidratosCell.innerHTML = arredondar(carboidratosFeijao, 2);
    feijaoGordurasCell.innerHTML = arredondar(gordurasFeijao, 2);

    const frangoRow = tabela.insertRow();
    const frangoNomeCell = frangoRow.insertCell(0);
    const frangoCaloriasCell = frangoRow.insertCell(1);
    const frangoProteinaCell = frangoRow.insertCell(2);
    const frangoCarboidratosCell = frangoRow.insertCell(3);
    const frangoGordurasCell = frangoRow.insertCell(4);

    frangoNomeCell.innerHTML = 'Frango';
    frangoCaloriasCell.innerHTML = arredondar(caloriasFrango, 2);
    frangoProteinaCell.innerHTML = arredondar(proteinaFrango, 2);
    frangoCarboidratosCell.innerHTML = arredondar(carboidratosFrango, 2);
    frangoGordurasCell.innerHTML = arredondar(gordurasFrango, 2);

    const macarraoRow = tabela.insertRow();
    const macarraoNomeCell = macarraoRow.insertCell(0);
    const macarraoCaloriasCell = macarraoRow.insertCell(1);
    const macarraoProteinaCell = macarraoRow.insertCell(2);
    const macarraoCarboidratosCell = macarraoRow.insertCell(3);
    const macarraoGordurasCell = macarraoRow.insertCell(4);

    macarraoNomeCell.innerHTML = 'Macarrão';
    macarraoCaloriasCell.innerHTML = arredondar(caloriasMacarrao, 2);
    macarraoProteinaCell.innerHTML = arredondar(proteinaMacarrao, 2);
    macarraoCarboidratosCell.innerHTML = arredondar(carboidratosMacarrao, 2);
    macarraoGordurasCell.innerHTML = arredondar(gordurasMacarrao, 2);

    const totalRow = tabela.insertRow();
    const totalNomeCell = totalRow.insertCell(0);
    const totalCaloriasCell = totalRow.insertCell(1);
    const totalProteinaCell = totalRow.insertCell(2);
    const totalCarboidratosCell = totalRow.insertCell(3);
    const totalGordurasCell = totalRow.insertCell(4);

    totalNomeCell.innerHTML = 'Total';
    totalCaloriasCell.innerHTML = arredondar(totalCalorias, 2);
    totalProteinaCell.innerHTML = arredondar(totalProteinas, 2);
    totalCarboidratosCell.innerHTML = arredondar(totalCarboidratos, 2);
    totalGordurasCell.innerHTML = arredondar(totalGorduras, 2);
}

function arredondar(numero, casas) {
    const fator = Math.pow(10, casas);
    return Math.round(numero * fator) / fator;
}

document.getElementById('conf').addEventListener('click', calcular);

