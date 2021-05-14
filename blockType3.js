class Block3 {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0,
            'friction': 1.2,
            'density': 2.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;


        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        stroke(0);
        strokeWeight(1);
        fill(0, 255, 0);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
};