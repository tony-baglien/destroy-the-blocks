import {detectCollisions} from './collisionDetection.js'

export default class Brick {

    constructor (game, position) {
        this.image = document.getElementById('image-brick');
        
        this.game = game;

        this.position = position;
        this.width = 80;
        this.height = 24; 

        this.markedForDeletion = false;
    }

    update(){
        if (detectCollisions(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y; 

            this.markedForDeletion = true;
        }


    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

    }
}