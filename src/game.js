const MAX_FRAME_NUMBER = 10;
const MAX_BALL_NUMBER = 2;
const DEFAULT_FRAME_NUMBER = 1;
const DEFAULT_BALL_NUMBER = 1;

var Game = function() {
  this.frameNumber = DEFAULT_FRAME_NUMBER;
  this.ballNumber = DEFAULT_BALL_NUMBER;
};

Game.prototype.playBall = function() {
  this.ballNumber += 1;
  if (this.ballNumber > MAX_BALL_NUMBER){
    this.frameNumber += 1;
  };
  if (this.ballNumber > MAX_BALL_NUMBER){
    this.ballNumber = DEFAULT_BALL_NUMBER;
  };
};
