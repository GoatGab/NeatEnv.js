class Brain {
    constructor(brain) {
        this.score = 0;
        this.fitness = 0;
        this.brain = brain.copy();
    }

    mutate() {
        this.brain.mutate(0.1);
    }

    think(inputs) {
        let output = this.brain.predict(inputs);
        return output;
    }

}