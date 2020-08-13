let process=[];
let resource=[];

let x=50,y=300;
let y1=50;
let r0=0,r1=0,r2=0,r3=0;
function setup() {
  createCanvas(400, 400);
  
  for(let i=0;i<4;i++){
   process[i]=new Process(x,y,"P"+i);
    x=x+100; 
  }
  x=50,y=50;
    for(let i=0;i<4;i++){
   resource[i]=new Resource(x,y,"R"+i);
     x=x+100;
  }

  
}
                       

function draw() {
  background(255,165,0);
  
  for(let i=0;i<process.length;i++){
   process[i].show(); 
    
    
  }
  
  text("DEADLOCK OCCURS",width/2-50,350);
  
  process[0].allocate(1,0,0,0);
  process[1].allocate(0,1,0,0);
  process[2].allocate(0,0,1,0);
  process[3].allocate(0,0,0,1);
  
  
  
  process[0].request(0,0,0,1);
  process[1].request(1,0,0,0);
  process[2].request(0,1,0,0);
  process[3].request(0,0,1,0);
  

  if(deadlock()){
  rectMode(CENTER);
    for(let i=0;i<resource.length;i++){
   resource[i].show(); 
    
  }
  }
       
}

function deadlock(){
  return true; 
}




