class Firework{

  constructor(){
    this.firework = new Particle(random(width), height, true);
    this.exploded = false;
    this.particles = [];
    this.choose = floor(random(0,4));
  }
  update(){
    if(!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();
      if(this.firework.vel.y >= 0){
        this.explode();
      }
    }else{
      for(var i=this.particles.length-1; i>=0; i--){
        this.particles[i].applyForce(gravity);
        this.particles[i].update();
        if(this.particles[i].done()){
          this.particles.splice(i,1);
        }
      }
    }
  }
  explode(){
    for(var i=0; i<100; i++){
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, false);
      this.particles.push(p);
      this.exploded = true;

    }
  }

  show(){
      if(!this.exploded){
        this.firework.show();
      }else{
        this.count = 0;
        for(var i=0; i<this.particles.length; i++){
          this.count ++;
          this.particles[i].show(this.count,this.choose);
        }
      }
  }

  done(){
    if(this.exploded && this.particles.length == 0){
      return true;
    }
    return false;
  }
}
