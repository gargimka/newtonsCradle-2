class Chain{
    constructor(bodyA,bodyB,x1,y1){
      this.x1=x1;
      this.y1=y1;
      //options for my constraint
     var options={
         bodyA:bodyA,
         bodyB:bodyB,
         length:10,
         stiffness:0.04,
         pointB:{x:this.x1,y:this.y1}
      }
     //create Constraint
         this.chain=Constraint.create(options);
         World.add(world,this.chain);
         
    }
 
    display(){
      var chain=this.chain;
      var pos1=chain.bodyA.position;
      var pos2=chain.bodyB.position;
 
 
 
     push(); 
     strokeWeight(6);

     var l1=pos1.x
     var l2=pos1.y;
     var l3=pos2.x+this.x1;
     var l4=pos2.y+this.y1;

     line(l1,l2,l3,l4);
    // pop();
 
    }
 }