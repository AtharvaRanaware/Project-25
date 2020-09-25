class Paper {
  constructor(x, y, width, height) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:1.2,
        density:1.2

    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //rectMode(CENTER);
    
  /* strokeWeight(2);
  stroke('black')
    fill('yellow');*/
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
   
  }
}