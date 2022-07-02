class Particle{

  constructor(x, y, firework){
    this.pos = createVector(x,y);
    this.acc = createVector(0,0);
    this.firework = firework;
    this.lifeSpan = 255;
    if(firework){
      this.vel = createVector(random(-5,5),random(-16,-10));
    }else{
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(1,10));
    }
  }

  applyForce(force){
    this.acc.add(force);
  }

  update(){
    if(!this.firework){
       this.vel.mult(0.95);
       this.lifeSpan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show(count,choose){
    if(this.firework){
      strokeWeight(10);
      stroke(210,120,0);
    }
    else{
      if(choose == 2){
        if(count<45){
          strokeWeight(3);
          stroke(random(160,255),random(100,160),random(0,50), this.lifeSpan);
        }else{
          strokeWeight(2);
          stroke(random(200,255),random(0,120),random(0,120),this.lifeSpan);
        }
      }
      else if(choose == 1){
        if(count<70){
          strokeWeight(3);
          stroke(random(120,255),random(100,160),random(0,50), this.lifeSpan);
        }else{
          strokeWeight(2);
          stroke(random(120,150),random(200,255),random(0,50),this.lifeSpan);
        }
      }
      else if(choose == 3){
        if(count<50){
          strokeWeight(3);
          stroke(random(160,255),random(100,160),random(0,50), this.lifeSpan);
        }else{
          strokeWeight(2);
          stroke(random(0,120),random(0,120),random(200,255),this.lifeSpan);
        }
      }
      else{
        if(count<80){
          strokeWeight(3);
          stroke(random(200,255),random(0,120),random(0,50), this.lifeSpan);
        }else{
          strokeWeight(2);
          stroke(random(120,200),random(200,255),random(0,50),this.lifeSpan);
        }
      }
    }
    point(this.pos.x, this.pos.y);
  }

  done(){
    if(this.lifeSpan < 0){
      return true;
    }
    return false;
  }
}
