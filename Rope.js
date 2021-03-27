// class Rope{
//     constructor(body1,body2,offsetX,offsetY){
//       //options for my constraint
//       this.offsetX=offsetX
//       this.offsetY=offsetY
//      var options={
//          bodyA:body1,
//          bodyB:body2,
//         // length:10,
//         // stiffness:0.04,
//          pointB:{x:this.offsetX,y:this.offsetY}
//       }
//      //create Constraint
//          this.rope=Constraint.create(options);
//          World.add(world,this.rope);
         
//     }
 
//     display(){
//       var rope=this.rope;
//       var pos1=rope.bodyA.position;
//       var pos2=rope.bodyB.position;
 
 
 
//      push(); 
//      strokeWeight(6);
//      line(pos1.x,pos1.y,pos2.x,pos2.y);
//      pop();
 
//     }
//  }P