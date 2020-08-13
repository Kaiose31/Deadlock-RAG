class Resource{
  constructor(x, y,n){
    this.x = x;
    this.y = y;
    this.name=n;

  }
  
  
  show(){
    push();
    fill(255);
    rect(this.x,this.y,30,30);
    pop();
    stroke(0);
    text(this.name,this.x-5,this.y);
    
    
  }
  
  
  
  
}