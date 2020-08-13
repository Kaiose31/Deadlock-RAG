class Process {
  constructor(x, y, n) {
    this.x = x;
    this.y = y;
    this.name = n;

  }



  show() {
    push();
    fill(255,0,0);
    circle(this.x, this.y, 30);
    pop();
    push();
    stroke(0);
    text(this.name, this.x - 5, this.y + 5);
    pop();
  }

  allocate(r0, r1, r2, r3) {
    let x = [r0, r1, r2, r3];
    push();
    stroke(0,128,0);
    if (r0 == 1) {
      line(this.x, this.y, resource[0].x+10, resource[0].y+10);
      

    }
    if (r1 == 1) {
      line(this.x, this.y,resource[1].x+10, resource[1].y+10);

      
      
      
    }
    if (r2 == 1) {
      line(this.x, this.y, resource[2].x+10, resource[2].y+10);

      
      
      
    }
    if (r3 == 1) {
      line(this.x, this.y, resource[3].x+10, resource[3].y+10);

      
      
    }

    pop();
  }

  request(r0, r1, r2, r3) {
    let x = [r0, r1, r2, r3];
      push();
    stroke(255,0,0);
    if (r0 == 1) {
      
      line(this.x, this.y, resource[0].x, resource[0].y);
      


    }
    if (r1 == 1) {
      line(this.x, this.y,resource[1].x, resource[1].y);
      
      
      
    }
    if (r2 == 1) {
      line(this.x, this.y, resource[2].x, resource[2].y);

      
      
    }
    if (r3 == 1) {
      line(this.x, this.y, resource[3].x, resource[3].y);

      
      
    }

    pop();
  }


}