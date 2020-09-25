class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          //restitution:0.3,
        friction:0.8,
        density:2

      }
      this.body = Bodies.rectangle(x,y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      //fill('white');
     
     
     
    }
  }