class Ball
{
          constructor(x,y,r){  
            
            this.body = Bodies.circle(x,y,r/2);
            this.radius = r;
            World.add(world,this.body);
          
          }
     

        display(){
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          ellipseMode(CENTER);
          ellipse(0,0,this.radius,this.radius);
          pop();
        }
}