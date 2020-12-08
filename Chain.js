class chain{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 200,
            stiffness: 1
        }
        this.constraintA= Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.constraintA);
    }
    display(){
        var BodyA = this.constraintA.bodyA.position;
        line(BodyA.x, BodyA.y, this.pointB.x, this.pointB.y);
    }
}