class Roof{
    constructor(x,y,width,height){
        var options={
            // restitution :1.0,
            isStatic : true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position
        //var angle=this.body.angle
    
        push();
        translate(pos.x,pos.y)
        //rotate(angle)
        rectMode(CENTER)
        stroke(51,153,102);
        fill(255,204,153);
        strokeWeight(10);
        rect(0,0,this.width,this.height);
        pop();
    
    }
    
    }