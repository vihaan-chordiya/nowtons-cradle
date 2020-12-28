class Ball{
   constructor(x,y,radius){
 var options = {
    isStatic:false,
    restitution:0.005,
    density:0.5
 }
  
  this.radius = radius;
  this.body = Bodies.circle(x,y,radius,options);
  World.add(world,this.body);
}

 display( ){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    fill("purple");
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    
    
    pop();
    }
}
