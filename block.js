class Block
{
    constructor(x, y, w, h)
    {
        this.x=0;
        this.y=0;
        this.w=50;
        this.h=75;
        var block_pro={restitution:0.01, friction:0.05};

        this.body=Bodies.rectangle(x, y, w, h, block_pro);
        World.add(world, this.body);
    }

    display()
    {
        rectMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill(color(round(random(0, 255)), round(random(0, 255)), round(random(0, 255))));
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
}