enchant();

window.onload = function(){
	var game = new Game(320,320);
	game.preload('chara1.gif');
	game.onload = function(){
	var sprite = new Sprite(32,32);
	sprite.image = game.assets['chara1.gif'];
	game.rootScene.addChild(sprite);
 };
	game.start();
};