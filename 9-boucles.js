function setup() {
  
  createCanvas(600, 400);

  background("white");
  fill("red");

  circle(random(width), random(height), 20);
}

function draw() {
    
    // on dessine 100 cercles en même temps, avec des coordonnées aléatoires
    for (let i=0; i < 100; i++) {
      circle(random(width), random(height), 20);
    }

    
}
