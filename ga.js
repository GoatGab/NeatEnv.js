function nextGeneration(objs, savedBrains) {
    calculateFitness(savedBrains);
    for (let i = 0; i < objs.length; i++) {
        objs[i].brain = pickOne();
    }
    savedBrains = [];
}

function pickOne() {
    let index = 0;
    let r = random(1);
    while (r > 0) {
        r = r - savedBrains[index].fitness;
        index++;
    }
    index--;
    let Parentbrain = savedBrains[index];
    let child = new Brain(Parentbrain.brain);
    child.mutate();
    return child;
}

function calculateFitness(savedBrains) {
    let sum = 0;
    for (let brain of savedBrains) {
        sum += brain.score;
    }
    for (let brain of savedBrains) {
        brain.fitness = brain.score / sum;
    }
}