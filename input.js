
export default class inputHandler {

    constructor(paddle, game) {
        document.addEventListener('keydown', event => {

            switch(event.keyCode) {

                case 37:
                    paddle.moveLeft();
                    break;

                case 39:
                    paddle.moveRight();
                    break;

                case 80:
                    game.togglePause();
                    break;

                case 32:
                    game.start();
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch(event.keyCode) {
                case 37:
                    if(paddle.currentSpeed < 0)paddle.stop();
                    break;

                case 39:
                    if (paddle.currentSpeed > 0)
                    paddle.stop();
                    break;
            }
        });
    }
}
