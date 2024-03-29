// Implemente aqui as funções
function testHeigth(gender, heigth) {

    if (gender === 'male') {
        return heigth >= 1.70
    }
    if (gender === 'female') {
        return heigth >= 1.60
    }
    return false
}

function testBars(gender, barReps, barSeconds) {

    if (gender === 'male') {
        return barReps >= 6 || barSeconds >= 15
    }
    if (gender === 'female') {
        return barReps >= 5 || barSeconds >= 12
    }
    return false
}

function testAbs(gender, abs) {

    if (gender === 'male') {
        return abs >= 41
    }
    if (gender === 'female') {
        return abs >= 41
    }
    return false
}

function testRun(gender, runDistance, runTime) {

    if (gender === 'male') {
        return runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200
    }
    if (gender === 'female') {
        return runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320
    }
    return false
}

function testSwinAndDive(gender, swimDistance, swimTime, diveTime) {

    if (gender === 'male') {
        return swimDistance >= 100 && swimTime <= 60 || diveTime <= 30
    }
    if (gender === 'female') {
        return swimDistance >= 100 && swimTime <= 60 || diveTime <= 30
    }
    return false
}

function showMessage(message) {

    return message.toString().toUpperCase()
}

function areCandidateResultsValid(gender, heigth, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime) {
  
    let tafHeigth = testHeigth(gender, heigth)
    let tafBars = testBars(gender, barReps, barSeconds)
    let tafAbs = testAbs(gender, abs)
    let tafRun = testRun(gender, runDistance, runTime)
    let tafSwinAndDive = testSwinAndDive(gender, swimDistance, swimTime, diveTime)
    return tafHeigth && tafBars && tafAbs && tafRun && tafSwinAndDive;
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
console.log(showMessage(areCandidateValid));