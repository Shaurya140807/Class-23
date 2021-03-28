class Ball{
     constructor(x,y,r){
         var options = {
             isStatic: true,

         }
      this.body = Bodies.circle(x,y,r)
      this.r = r;

      World.add(world,this.body)

     }
     display(){
      var pos    = this.body.position;
      ellipseMode(CENTER);
      fill(100);
      ellipse(pos.x,pos.y,this.r);
      

     }
}