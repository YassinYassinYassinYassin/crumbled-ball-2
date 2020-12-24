class Paper {
    constructor(x,y,radius) {
      var options = {
          'restitution':0.5,
          'friction':0.5,
          'density':0.5,
          isStatic:false
      }

      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius/4;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image (this.image, pos.x, pos.y, 60, 60);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
