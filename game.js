
enchant();

window.onload = function(){
	var game = new Game(320,320);
	game.preload('icon0.gif','images/haikei.png');
	
	BOMB = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type){
		enchant.Sprite.call(this, 16,16);
		this.x = _x; this.y = 220;
		this.image = game.assets['icon0.gif'];
		
		this.addEventListener(Event.TOUCH_START, function(e){
		this.remove();
		});
		game.rootScene.addChild(this);
		},
		remove: function () {
			game.rootScene.removeChild(this);
			}
		});
	game.onload = function(){
	var scene = game.rootScene;
	var bg = new Sprite (320,320);
	bg.image = game.assets['images/haikei.png'];
	game.rootScene.addChild(bg);
 };
	game.start();
};