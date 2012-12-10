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

    Bomb =  enchant.Class.create(enchant.Sprite,{
            initialize: function(x, y, dx, dy){
                enchant.Sprite.call(this, 16,16);
                this.x = x;
                this.y = y;
                this.image = game.assets['icon0.gif'];
                this.frame =25;
                this.scaleX = 1.5;
                this.scaleY = 1.5;
                this.addEventListener(Event.TOUCH_START, function(e){
                        blast = new Blast1(e.x, e.y);
                        this.remove();
                    });

                game.rootScene.addChild(this);

                this.addEventListener(Event.ENTER_FRAME, function(){
                        this.moveBy(dx, dy);
                    });
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

    new Bomb(0, 150, 1, 0);
    new Bomb(310, 150, -1, 0);
    new Bomb(155, 150, 0, 1);
    new Bomb(155, 300, 0, -1);
    new Bomb(0, 300, 1, -1);
    new Bomb(0, 0, 1, 1);
    new Bomb(310, 0, -1, 1);
    new Bomb(305, 300, -1, -1);

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