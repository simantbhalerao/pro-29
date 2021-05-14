class launcher {
    constructor(body, anchor) {
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.04,
            length: 10

        }

        this.bodyA = body
        this.pointB = anchor
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display() {
        if (this.launcher.bodyA) {
            var pointA = this.bodyA.position;
            var pointB = this.pointB
            var angle = this.bodyA.angle;
            rotate(angle);
            strokeWeight(6);
            stroke(0, 0, 0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly() {
        this.launcher.bodyA = null;
    }

}