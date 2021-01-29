class Ball
{
    constructor(x, y, s, r)
    {
        this.x=0;
        this.y=0;
        this.s=6;
        this.r=40;
        var ball_pro={restitution:0.8, friction:0.005, density:1};
        this.image=loadImage("Ball.png");

        this.body=Bodies.polygon(x, y, s, r, ball_pro);
        World.add(world, this.body);
    }

    display()
    {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 90, 90);
    }
}