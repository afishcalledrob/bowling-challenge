describe('Game', function(){
    var game = new Game;
    beforeEach(function() {
      game.frameNumber = DEFAULT_FRAME_NUMBER;
      game.ballNumber = DEFAULT_BALL_NUMBER;
    });
  describe('Frame number', function(){
    it('should return the default frame number for a new game', function() {
      expect(game.frameNumber).toEqual(DEFAULT_FRAME_NUMBER);
    });
    it('should increment when the ball number max', function(){
      for (var i = 1; i <= 2; i++) game.playBall();
      expect(game.frameNumber).toEqual(2);
    });
  });
  describe('Ball', function(){
    it('should increment the ball number', function() {
      game.playBall();
      expect(game.ballNumber).toEqual(MAX_BALL_NUMBER);
    });
    it('should reset ball number to default when frame changes', function() {
      for (var i = 1; i <= 2; i++) game.playBall();
      expect(game.ballNumber).toEqual(DEFAULT_BALL_NUMBER);
    });
  });
});
