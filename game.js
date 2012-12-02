enchant();

window.onload = function(){
	var game = new Game(320,320);
	game.preload('icon0.gif','images/haikei.png','images/effect0.gif');
	
	var Blast = enchant.Class.create(enchant.Sprite, {
    	initialize: function(x, y){
			enchant.Sprite.call(this,16,16);
			this.x = x -2;
			this.y = y -2;
			this.scaleX = 4;
			this.scaleY = 4;
			this.image = game.assets[Blast_IMG];
			this.time = 0;
			
			this.duration = 5;
			this.frame = 0;
	
		this.addEventListener('enterframe', function(){
		    this.time++;
		    
	   	this.frame = Math.floor(this.time/this.duration *5);
	    	if(this.time == this.duration)this.remove();
		});
		game.rootScene.addChild(this);
   	},
    	remove: function(){
        	game.rootScene.removeChild(this);
   	 }
	});
	BOMB = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type){
		enchant.Sprite.call(this, 16,16);
		this.x = _x; this.y = 220;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 4;
		this.scaleY = 4;
		
		this.addEventListener(Event.TOUCH_START, function(e){
		blast = new Blast1(e.x, e.y);
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
	var x =30;
	new BOMB(x);
 };
	game.start();
};