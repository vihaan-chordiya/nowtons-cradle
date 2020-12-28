class Rod{
    constructor(x,y,height,width,){
        var options={
        isStatic:true
        }
        this.body = Bodies.rectangle(x,y,height,width,options)
        this.height = height
        this.width = width
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        fill("purple");
        rectMode(CENTER)
        rect(0,0,this.height,this.width)
        pop();
    }
}