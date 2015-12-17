angular.module('cardGameNew')
.factory('GameService', function () {
	return {
		getRandomDesk : function() {
			var cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
			var positionAndCards = [];
			
			var index = 0;
			var cardNum = 0;
			while(cards.length > 0) {
				//return a random index between 0 and the length of cards
				index= Math.floor(Math.random() * cards.length);
				cardNum = cards.splice(index,1);
				positionAndCards.push({card: cardNum[0], matched: false, isUp: false});
			}
			
			return positionAndCards;
		}
	}
});