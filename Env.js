class NeatEnv {
    constructor(objs, nnConfig, newGenFunc) {
        this.objs = objs;
        this.savedBrains = [];
        for (let i = 0; i < objs.length; i++) {
            objs[i].brain = new Brain(new NeuralNetwork(nnConfig[0], nnConfig[1], nnConfig[2]));
        }
        this.newGenFunc = newGenFunc;
    }

    update() {
        if (this.objs.length == 0) {
            nextGeneration(this.objs, this.savedBrains);
            this.newGenFunc();
        }
    }

    remove(obj) {
        for (let i = 0; i < this.objs.length; i++) {
            if (objs[i] == obj) {
                this.savedBrains.push(this.objs.splice(i, 1)[0]);
            }
        }
    }

    predict(obj, inputs) {
        return obj.brain.think(inputs);
    }
}