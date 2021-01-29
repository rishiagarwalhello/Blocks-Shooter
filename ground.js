class Ground
{
    constructor(x, y, w, h)
    {
        this.x=0;
        this.y=5;
        this.w=1400;
        this.h=10;
        var ground_pro={restitution:0.2, friction:0.005, isStatic:true};

        this.body=Bodies.rectangle(x, y, w, h, ground_pro);
        World.add(world, this.body);
    }

    display()
    {
        rectMode(CENTER);
        noStroke();
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
}