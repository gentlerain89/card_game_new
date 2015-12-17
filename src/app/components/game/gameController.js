angular.module('cardGameNew')
.controller('GameController', GameController);
    
/** @ngInject */
function GameController($location, $timeout, GameService) {
	
	var vm = this;
	vm.positionAndCards = [];//map card by position
	vm.flipped = [];
	vm.moves = 0;
	vm.pairs = 0;
	vm.init = function() {
		vm.positionAndCards = GameService.getRandomDesk();
		vm.moves = 0;
		vm.pairs = 0;
	}
	vm.flipCard = function(card) {
		if(vm.flipped.length < 2 && !card.isUp && !card.matched) {
			vm.flipped.push(card);	
			card.isUp = true;
			if(vm.flipped.length == 2) {
				vm.moves++;
				$timeout(function() {
					vm.flipped[0].matched = vm.flipped[1].matched = (vm.flipped[0].card == vm.flipped[1].card);
					vm.flipped[0].isUp =false;
					vm.flipped[1].isUp = false;

					if(vm.flipped[0].matched) vm.pairs++;
					vm.flipped = [];
					if(vm.pairs == 18) {
						if(confirm("Congratulation! You has matched all pairs. Do you want to play again?")) {
							vm.init();	
						} else {
							$location.path('/');	
						}	
					}
				}, 1000);
			}
		}

	}
	vm.init();
}