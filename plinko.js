class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.2
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        Translate(pos.x,pos.y);
        rotate(angle);
        //imageMode(CENTER);
        Fill("white");
        elipseMode(RADIUS);
        elipse(x,y,this.radius);
        pop();
    }
}