/*class Ball{
    consturctor(x, y, diameter){
        this.body = Matter.Bodies.circle(x, y, diameter);
        this.diameter = diameter;
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y, this.diameter);
    }
}*/
class Ball{
    constructor(x, y, radius){
        var options={
            isStatic: false,
            restitution: 1, 
            friction: 0, 
            density: 1
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("lightblue");
        ellipse(this.body.position.x, this.body.position.y, this.radius*2);
    }
}