enchant();

window.onload = function(){
	var game = new Game(320,320);
	game.fps = 60;
	game.score = 0;
	//画像などの読み込み
	game.preload('icon0.gif','images/chara1.gif','images/haikei.png','images/effect0.gif');
	
	//爆発エフェクト
	var Blast1 = enchant.Class.create(enchant.Sprite, {
    	initialize: function(x, y){
			enchant.Sprite.call(this,16,16);
			this.x = x;
			this.y = y;
			this.scaleX = 1.5;
			this.scaleY = 1.5;
			this.image = game.assets['images/effect0.gif'];
			this.time = 0;
			//アニメーションの遅れ
			this.duration = 10;
			this.frame = 0;
	
		this.addEventListener('enterframe', function(){
		    this.time++;
		     //爆発アニメーション
	   	this.frame = Math.floor(this.time/this.duration *5);
	    	if(this.time == this.duration)this.remove();
		});
		game.rootScene.addChild(this);
   	},
    	remove: function(){
        	game.rootScene.removeChild(this);
   	 }
	});
	//爆弾
	BOMB1 = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type){
		enchant.Sprite.call(this, 16,16);
		this.x = _x; this.y = 150;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.addEventListener(Event.ENTER_FRAME, function () {
		this.x +=1;
		});

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
		
		//爆弾
	BOMB2 = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type2){
		enchant.Sprite.call(this, 16,16);
		this.x = _x; this.y = 150;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.addEventListener(Event.ENTER_FRAME, function () {
		this.x -=1;
		});

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

		//爆弾
	BOMB3 = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type3){
		enchant.Sprite.call(this, 16,16);
		this.x = _x; this.y = 0;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.addEventListener(Event.ENTER_FRAME, function () {
		this.y +=1;
		});

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
		
		//爆弾
	BOMB4 = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type4){
		enchant.Sprite.call(this, 16,16);
		this.x = _x; this.y = 300;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.addEventListener(Event.ENTER_FRAME, function () {
		this.y -=1;
		});

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
		
		//爆弾
	BOMB5 = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type5){
		enchant.Sprite.call(this, 16,16);
		this.x = _x; this.y = 300;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.addEventListener(Event.ENTER_FRAME, function () {
		this.x +=1;
		this.y -=1;
		});

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
		
		//爆弾
	BOMB6 = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type6){
		enchant.Sprite.call(this, 16,16);
		this.x = 0; this.y = 0;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.addEventListener(Event.ENTER_FRAME, function () {
		this.x +=1;
		this.y +=1;
		});

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
		//爆弾
	BOMB7 = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type7){
		enchant.Sprite.call(this, 16,16);
		this.x = 310; this.y = 0;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.addEventListener(Event.ENTER_FRAME, function () {
		this.x -=1;
		this.y +=1;
		});

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
		
		//爆弾
	BOMB8 = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type8){
		enchant.Sprite.call(this, 16,16);
		this.x = 305; this.y = 300;
		this.image = game.assets['icon0.gif'];
		this.frame =25;
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.addEventListener(Event.ENTER_FRAME, function () {
		this.x -=1;
		this.y -=1;
		});

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
		//くま
		Bear = enchant.Class.create(enchant.Sprite,{
	initialize: function(_x, type){
		enchant.Sprite.call(this, 32,32);
		this.x = 145; this.y = 145;
		this.image = game.assets['images/chara1.gif'];
		this.frame =0;
		game.rootScene.addChild(this);
		}
		});
	game.onload = function(){
	var scene = game.rootScene;
	var bg = new Sprite (320,320);
	bg.image = game.assets['images/haikei.png'];
	game.rootScene.addChild(bg);
	var w1 = 0;
	new BOMB1(w1);
	var w2 = 310;
	new BOMB2(w2);
	var x1 = 155;
	new BOMB3(x1);
	var x2 = 155;
	new BOMB4(x2);
	var y1 = 0;
	new BOMB5(y1);
	var y2 = 0;
	new BOMB6(y2);
	var z1 = 0;
	new BOMB7(z1);
	var z2 = 0;
	new BOMB8(z2);
	var q = 160;
	new Bear(q);
	/*//ゲームオーバー
	else if(new BOMB.remove){
			game.end();
		}*/
 };
 	//ゲーム開始
	game.start();
};