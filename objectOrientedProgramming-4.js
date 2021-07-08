class Kucing {
    constructor(color, height, length, weight) {
        this.color = color;
        this.height = height;
        this.length = length;
        this.weight = weight;
    }

    purring() {
        console.log("Meow...")
    }

    eat() {
        this.weight = this.weight + 1;
    }
}