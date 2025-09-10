(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.logo_largebuc = function() {
	this.initialize(img.logo_largebuc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,100);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WhiteborderMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2SwMAAAglfIBtAAMAAAAlfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WhiteborderMC, new cjs.Rectangle(-5.5,-120,11,240), null);


(lib.Text5MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Helt enkelt – utbildningar som gör jobbet. ", "66px 'CircularXX'", "#FFFFFF");
	this.text.lineHeight = 83;
	this.text.lineWidth = 778;
	this.text.parent = this;
	this.text.setTransform(248.2,-18);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text5MC, new cjs.Rectangle(246.2,-20,782.3999999999999,334.8), null);


(lib.Text4MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("För dig, dina medarbetare och hela företaget.", "66px 'CircularXX'", "#FFFFFF");
	this.text.lineHeight = 83;
	this.text.lineWidth = 778;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text4MC, new cjs.Rectangle(0,0,782.4,334.8), null);


(lib.Text3MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text4test = new cjs.Text("Vi hjälper dig att välja och planera utbildning.", "66px 'CircularXX'", "#FFFFFF");
	this.text4test.name = "text4test";
	this.text4test.lineHeight = 83;
	this.text4test.lineWidth = 798;
	this.text4test.parent = this;
	this.text4test.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text4test).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text3MC, new cjs.Rectangle(0,0,802.4,501.2), null);


(lib.Text2MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text2test = new cjs.Text("Utbildningar i allt från arbetsmiljö till vägmarkeringar.", "66px 'CircularXX'", "#FFFFFF");
	this.text2test.name = "text2test";
	this.text2test.lineHeight = 83;
	this.text2test.lineWidth = 783;
	this.text2test.parent = this;
	this.text2test.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text2test).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text2MC, new cjs.Rectangle(0,0,787.4,584.4), null);


(lib.TestSymbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text1test = new cjs.Text("Ta ditt företag \ntill nästa nivå.", "bold 110px 'CircularXX'", "#26A7FF");
	this.text1test.name = "text1test";
	this.text1test.lineHeight = 115;
	this.text1test.lineWidth = 847;
	this.text1test.parent = this;
	this.text1test.setTransform(-40,-47);

	this.timeline.addTween(cjs.Tween.get(this.text1test).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TestSymbol1, new cjs.Rectangle(-42,-49,850.6,506.2), null);


(lib.LogoMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo_largebuc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LogoMC, new cjs.Rectangle(0,0,350,100), null);


(lib.ClickButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhNaATiMAAAgnDMCa1AAAMAAAAnDg");
	this.shape.setTransform(495.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,991,250);


(lib.BlubackgroundMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B4B6F").s().p("EggQASwMAAAglfMBAhAAAMAAAAlfg");
	this.shape.setTransform(206.5,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlubackgroundMC, new cjs.Rectangle(0,0,413,240), null);


(lib.BackgroundMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// stage content:
(lib._1920x1080 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop(); // Stoppar tidslinjen på Frame 1
		
		// 🔹 Sätt rubriken (text1) till synlig direkt
		this.text1.alpha = 1;
		
		// 🔹 Sätt de andra texterna till osynliga från start
		this.text2.alpha = 0;
		this.text3.alpha = 0;
		this.text4.alpha = 0;
		this.text5.alpha = 0;
		
		// 🔹 Skapa bakgrundscontainer om den saknas
		if (!this.bg) {
		    console.log("this.bg saknas – skapar en ny bakgrundscontainer!");
		    this.bg = new createjs.Container();
		    this.bg.x = 1442.4;
		    this.bg.y = 538.4;
		    this.addChildAt(this.bg, 0);
		}
		
		// 🔹 Byt ut bakgrunden till extern bild från GitHub
		var img = new Image();
		img.src = "https://cdn.jsdelivr.net/gh/thechineseroom/banner_parken_250127/Bannerexport/images/bucman.jpg";
		console.log("Försöker ladda bild:", img.src);
		
		var scope = this;
		
		img.onload = function() {
		    console.log("Bild laddad!");
		    var bgBitmap = new createjs.Bitmap(img);
		
		    // 🔹 Justera placering för bakgrundsbilden
		    bgBitmap.x = 180;  
		    bgBitmap.y = -120; 
		
		    // 🔹 Lägg in bilden i this.bg
		    scope.bg.removeAllChildren();
		    scope.bg.addChild(bgBitmap);
		};
		
		img.onerror = function() {
		    console.log("Fel: Kunde inte ladda bilden.");
		};
		
		// 🔹 Zoom-funktion för bakgrunden
		function zoomBackground(scope) {
		    createjs.Tween.get(scope.bg, { loop: true })
		        .to({ scaleX: 1.05, scaleY: 1.05 }, 8000, createjs.Ease.quadInOut)
		        .to({ scaleX: 1, scaleY: 1 }, 8000, createjs.Ease.quadInOut);
		}
		
		// 🔹 Starta zoom-effekten
		zoomBackground(this);
		
		// 🔹 Funktion som loopar genom texterna
		function loopTexts(scope) {
		    createjs.Tween.get(scope.text2)
		        .to({ alpha: 1 }, 1000)
		        .wait(3000)
		        .to({ alpha: 0 }, 1000)
		        .call(() => {
		            createjs.Tween.get(scope.text3)
		                .to({ alpha: 1 }, 1000)
		                .wait(3000)
		                .to({ alpha: 0 }, 1000)
		                .call(() => {
		                    createjs.Tween.get(scope.text4)
		                        .to({ alpha: 1 }, 1000)
		                        .wait(1000)
		                        .call(() => {
		                            createjs.Tween.get(scope.text5)
		                                .to({ alpha: 1 }, 1000)
		                                .wait(7000)
		                                .to({ alpha: 0 }, 1000);
		
		                            createjs.Tween.get(scope.text4)
		                                .wait(8000)
		                                .to({ alpha: 0 }, 1000)
		                                .call(() => loopTexts(scope));
		                        });
		                });
		        });
		}
		
		// 🔹 Starta loopen med rätt kontext
		loopTexts(this);
		
		// 🔹 ClickArea - gör hela bannern klickbar
		this.clickArea.cursor = "pointer";
		this.clickArea.addEventListener("click", function() {
		    if (typeof window.clickTag !== "undefined" && window.clickTag !== "") {
		        window.open(window.clickTag, "_blank");
		    } else {
		        console.log("Ingen clickTag definierad av annonsservern.");
		    }
		});
		
		// 🔹 Se till att hela ytan är klickbar
		var hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(0, 0, this.clickArea.nominalBounds.width, this.clickArea.nominalBounds.height);
		this.clickArea.hitArea = hit; 
		
		// 🔹 Göra clickArea osynlig men interaktiv
		this.clickArea.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text5 = new lib.Text5MC();
	this.text5.name = "text5";
	this.text5.setTransform(193,798.75,1,1,0,0,0,391.2,167.4);

	this.clickArea = new lib.ClickButton();
	this.clickArea.name = "clickArea";
	this.clickArea.setTransform(494.65,540,1.9375,4.32,0,0,0,255.3,125);
	new cjs.ButtonHelper(this.clickArea, 0, 1, 1);

	this.instance = new lib.LogoMC();
	this.instance.setTransform(1535.65,59);

	this.instance_1 = new lib.WhiteborderMC();
	this.instance_1.setTransform(902.45,540,1.1818,4.5);

	this.text4 = new lib.Text4MC();
	this.text4.name = "text4";
	this.text4.setTransform(222,433.55,1,1,0,0,0,174,30.1);

	this.text3 = new lib.Text3MC();
	this.text3.name = "text3";
	this.text3.setTransform(222,433.55,1,1,0,0,0,174,30.1);

	this.text2 = new lib.Text2MC();
	this.text2.name = "text2";
	this.text2.setTransform(222,433.55,1,1,0,0,0,174,30.1);

	this.text1 = new lib.TestSymbol1();
	this.text1.name = "text1";
	this.text1.setTransform(48,116.5,1,1,0,0,0,-42,-49);

	this.instance_2 = new lib.BlubackgroundMC();
	this.instance_2.setTransform(451,540,2.184,4.5,0,0,0,206.5,120);

	this.bg = new lib.BackgroundMC();
	this.bg.name = "bg";
	this.bg.setTransform(1442.4,538.4,1,1,0,0,0,722.4,417.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.instance_2},{t:this.text1},{t:this.text2},{t:this.text3},{t:this.text4},{t:this.instance_1},{t:this.instance},{t:this.clickArea},{t:this.text5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,540);
// library properties:
lib.properties = {
	id: 'FE62A4A6F090493DA9DC5A50C4BF5FA9',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo_largebuc.png?1739464786340", id:"logo_largebuc"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FE62A4A6F090493DA9DC5A50C4BF5FA9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;