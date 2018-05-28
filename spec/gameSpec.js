describe('Game', function(){
  var game = new Game;
  describe('The games frame number', function(){
    it('should return the default frame number for a new game', function() {
      expect(game.frameNumber).toEqual(DEFAULT_FRAME_NUMBER);
    });
  });

});
