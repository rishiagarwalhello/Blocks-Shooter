class Stand
{
    constructor(x, y, w, h)
    {
        this.x=0;
        this.y=0;
        this.w=400;
        this.h=20;
        var stand_pro={restitution:0.2, friction:0.005, isStatic:true};

        this.body=Bodies.rectangle(x, y, w, h, stand_pro);
        World.add(world, this.body);
    }

    display()
    {
        rectMode(CENTER);
        strokeWeight(1);
        stroke("green");
        fill("blue");
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
}