class Particle{
    constructor(x,y,radius){
        var options={
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,this.radius,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        Translate(pos.x,pos.y);
        rotate(angle);
        //imageMode(CENTER);
        Fill(this.color);
        elipseMode(RADIUS);
        elipse(x,y,this.radius);
        pop();
    }
    Score(){
        if(this.Visiblity<0 && this.Visiblity>-1005){
        score++;
        
         }
         }
}