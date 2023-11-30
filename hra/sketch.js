const playerSize = 30;
const playerSpeed = 5;

const enemySize = 30;
var enemies = [];
var player;

var enemy;

function setup() {
    createCanvas(800, 600);

    player = createVector(width / 2, height / 2);
    
    for (var i = 0; i< 10; i++ ){
        var randomPos = createVector(random(width),random(height));
        var enemy = new Enemy(randomPos);
        enemies.push(enemy);
    }
}

function draw() {
    background(220);

    var dir = createVector();
    if (Input.keyPressed('a')) dir.x -= 1;
    if (Input.keyPressed('d')) dir.x += 1;
    if (Input.keyPressed('w')) dir.y -= 1;
    if (Input.keyPressed('s')) dir.y += 1;
    dir.setMag(playerSpeed);
    player.add(dir);

    for (var enemy of enemies)
        enemy.update();

    fill(0);
    circle(player.x, player.y, playerSize);
    if (player.x > width) {
       player.x = 0
    }
    if (player.x < 0) {
        player.x = width
    }
    if (player.y > height) {
        player.y = 0
     }
     if (player.y < 0) {
        player.y = height
    }

    for (var enemy of enemies)
        enemy.draw();
}   
