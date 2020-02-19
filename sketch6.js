var bug = [];
var count = 10;
let timer = 30;
var score = 0;
var squish = [];

function preload(){
    for(var i = 0; i < count; i++){
        bug[i] = new Crawler("bugs.png", random(640), random(480), random(-1,1));
        squish = loadImage('sprite_bug7.png');
      }
 }
  function setup() {
    createCanvas(640,480);
    imageMode(CENTER)
  }

function draw(){
  background(255);
  for(var i = 0; i < count; i++){	
    bug[i].draw();
  }
  text("Score: " + score, 20, 30);
  text("Time Left: " + timer, 20, 45);
  if ((frameCount % 60 == 0) && (timer > 0)){
    timer--;
  }
  if ((timer == 0)|| (score == count)) {
       fill(0);
       rect(275,220,125,70 );
       fill(255);
       text("GAME OVER", 300, 250);
       text("You scored: " + score, 300, 265);
       bug[i].moving = 0;
  }
}

function mouseClicked() {
  for (var i = 0; i < count; i++){
    bug[i].kill(mouseX, mouseY);
  }
}

function Crawler(imageName, x, y, moving){
    this.spriteSheet = loadImage(imageName);
    this.frame = 0;
    this.x = x;
    this.y = y;
    this.moving = moving;
    this.facing = moving;

    this.kill = function(x,y){
      if((this.x-20<x && x < this.x+20 && this.y-20<y && y<this.y+20) && (this.spriteSheet !== squish)) {
        this.moving = 0;
        this.spriteSheet=squish;
        score = score + 1;
        this.update = function() {}
      }
    }

    this.draw = function(){
        push();
        translate(this.x,this.y);
        if (this.facing < 0){
            scale(-1.0, 1.0);
         }
        if (this.moving == 0){
          image(this.spriteSheet, 0, 0, 100, 100, 0, 0, 100, 100);//size,size,start,start,end,end
          this.spriteSheet=squish;
        } 
        else{
            if (this.frame == 0){ 
            image(this.spriteSheet, 0, 0, 100, 100, 0, 0, 100, 100);//size,size,start,start,end,end
            }
            if (this.frame == 1){ 
            image(this.spriteSheet, 0, 0, 100, 100, 100, 0, 100, 100);//size,size,start,start,end,end
            }
            if (this.frame == 2){ 
            image(this.spriteSheet, 0, 0, 100, 100, 200, 0, 100, 100);//size,size,start,start,end,end
            }
            if (this.frame == 3){ 
            image(this.spriteSheet, 0, 0, 100, 100, 300, 0, 100, 100);//size,size,start,start,end,end
            }
            if (this.frame == 4){ 
            image(this.spriteSheet, 0, 0, 100, 100, 400, 0, 100, 100);//size,size,start,start,end,end
            }
            if (this.frame == 5){ 
            image(this.spriteSheet, 0, 0, 100, 100, 500, 0, 100, 100);//size,size,start,start,end,end
            }
            if (this.frame == 6){ 
            image(this.spriteSheet, 0, 0, 100, 100, 600, 0, 100, 100);//size,size,start,start,end,end
            }
            if (this.frame == 7){ 
            image(this.spriteSheet, 0, 0, 100, 100, 500, 0, 100, 100);//size,size,start,start,end,end
            }
            if (score == 0){
            if (frameCount % 12 == 0){
            this.frame = (this.frame+1)%8;
            this.x = this.x + this.moving *6;
              }
            }
            if (score == 1){
              if (frameCount % 11 == 0){
              this.frame = (this.frame+1)%8;
              this.x = this.x + this.moving *6;
                }
              }
              if (score == 2){
                if (frameCount % 10 == 0){
                this.frame = (this.frame+1)%8;
                this.x = this.x + this.moving *6;
                  }
                }
                if (score == 3){
                  if (frameCount % 9 == 0){
                  this.frame = (this.frame+1)%8;
                  this.x = this.x + this.moving *6;
                    }
                  }
                  if (score == 4){
                    if (frameCount % 8 == 0){
                    this.frame = (this.frame+1)%8;
                    this.x = this.x + this.moving *6;
                      }
                    }
                    if (score == 5){
                      if (frameCount % 7 == 0){
                      this.frame = (this.frame+1)%8;
                      this.x = this.x + this.moving *6;
                        }
                      }
                      if (score == 6){
                        if (frameCount % 6 == 0){
                        this.frame = (this.frame+1)%8;
                        this.x = this.x + this.moving *6;
                          }
                        }
                        if (score == 7){
                          if (frameCount % 5 == 0){
                          this.frame = (this.frame+1)%8;
                          this.x = this.x + this.moving *6;
                            }
                          }
                          if (score == 8){
                            if (frameCount % 4 == 0){
                            this.frame = (this.frame+1)%8;
                            this.x = this.x + this.moving *6;
                              }
                            }
                            if (score == 9){
                              if (frameCount % 3 == 0){
                              this.frame = (this.frame+1)%8;
                              this.x = this.x + this.moving *6;
                                }
                              }
                              if (score == 10){
                                if (frameCount % 2 == 0){
                                this.frame = (this.frame+1)%8;
                                this.x = this.x + this.moving *6;
                                  }
                                }

            if(this.x < 30){
                this.moving = +1;
                this.facing = +1;
            }
            if(this.x > width-30){
                this.moving = -1;
                this.facing = -1;
            }
          } 
         pop();
       }
}

