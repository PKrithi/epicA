class PlayerArcher {
  constructor(x, y, width, height, angle) {

    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);
    Matter.Body.setAngle(this.body, -90); 
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    if(keyIsDown(RIGHT_ARROW)){
      this.angle += 1;
    }

    if(keyIsDown(LEFT_ARROW)){
      this.angle -= 1;
    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

  }
}