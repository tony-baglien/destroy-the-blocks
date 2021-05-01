import {detectCollisions} from './collisionDetection.js'


export default class Ball {

    constructor (game) {

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;

        this.image = document.getElementById('image-ball');
        this.size = 32;
        this.reset();
    }

    reset() {
        this.speed = {x : 4, y : -2};
        this.position = {x : 10, y : 400};
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size)
    }
    
    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

    // Wall Left or Right
    if (this.position.x + this.size > this.gameWidth ||
        this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

    // Wall Top
    if (this.position.y < 0) this.speed.y = -this.speed.y;

    //Wall Bottom
    if (this.position.y + this.size > this.gameHeight) {
        this.game.lives--;
        this.reset();  
    }
    
    
    //Paddle Collision Detection
        if (detectCollisions(this, this.game.paddle)) {
        this.speed.y = -this.speed.y;
        this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}
