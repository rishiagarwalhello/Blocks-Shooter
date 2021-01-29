class Launcher
{
    constructor(pointA, bodyB)
    {
        var launcher_pro={pointA:pointA, bodyB:bodyB, stiffness:0.008, length:10};
        this.pointA=pointA;

        this.body=Constraint.create(launcher_pro);
        World.add(world, this.body);
    }

    fly()
    {
        this.body.bodyB=null;
    }
    
    display()
    {
        if(this.body.bodyB)
        {
            strokeWeight(2);
            stroke("red");
            line(this.pointA.x, this.pointA.y, this.body.bodyB.position.x, this.body.bodyB.position.y);
        }
    }
}