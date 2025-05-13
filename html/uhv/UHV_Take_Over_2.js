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
// helper functions:

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


(lib.Text3MC_Link = function(mode,startPosition,loop,reversed) {
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
	this.text2test = new cjs.Text("Under Byggföretagens nationella upphandlings-\nvecka fokuserar vi på metoderna, verktygen och \nallt annat som rör upphandling inom bygg- och \nanläggningsbranschen.", 
  "43px 'CircularXX-Medium'",
  "#FFFFFF"
);
	this.text2test.name = "text2test";
	this.text2test.lineHeight = 48;
	this.text2test.lineWidth = 1145;
	this.text2test.parent = this;
	this.text2test.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text2test).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text3MC_Link, new cjs.Rectangle(0,0,1149.1,220.5), null);


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
	this.text1test = new cjs.Text(
  "Så gör du bättre upphandlingar.",
  "130px 'CircularXX-Black'",
  "#FFFFFF"
);
	this.text1test.name = "text1test";
	this.text1test.lineHeight = 135;
	this.text1test.lineWidth = 1034;
	this.text1test.parent = this;
	this.text1test.setTransform(-40,-47);

	this.timeline.addTween(cjs.Tween.get(this.text1test).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TestSymbol1, new cjs.Rectangle(-42,-49,1037.9,298.8), null);


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


// stage content:
(lib.UHV_Take_Over_2 = function(mode,startPosition,loop,reversed) {
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
		this.text2.alpha = 1;
		
		this.text3.alpha = 0;
		
		createjs.Tween.get(this.text3)
		  .wait(2000)
		  .to({ alpha: 1 }, 1000, createjs.Ease.quadInOut);
		
		
		// 🔹 Skapa bakgrundscontainer om den saknas
		if (!this.bg) {
		    console.log("this.bg saknas – skapar en ny bakgrundscontainer!");
		    this.bg = new createjs.Container();
		    this.bg.x = 0;
		    this.bg.y = 0;
		    this.addChildAt(this.bg, 0);
		}
		
		// 🔹 Byt ut bakgrunden till extern bild från GitHub
		var img = new Image();
		img.src = "https://cdn.jsdelivr.net/gh/thechineseroom/banner_assets/images/bg_uhv2.jpg";
		console.log("Försöker ladda bild:", img.src);
		
		var scope = this;
		
		img.onload = function () {
		    console.log("Bild laddad!", img.width, img.height);
		
		    setTimeout(() => {
		        const bgBitmap = new createjs.Bitmap(img);
		
		        bgBitmap.regX = img.width / 2;
		        bgBitmap.regY = img.height / 2;
		
		        const pixelRatio = window.devicePixelRatio || 1;
		        const canvasW = stage.canvas.width / pixelRatio;
		        const canvasH = stage.canvas.height / pixelRatio;
		
		        bgBitmap.x = canvasW / 2;
		        bgBitmap.y = canvasH / 2;
		
		        console.log("Canvas (visuell):", canvasW, canvasH);
		        console.log("bgBitmap x/y:", bgBitmap.x, bgBitmap.y);
		
		        scope.bg.removeAllChildren();
		        scope.bg.addChild(bgBitmap);
		
		        scope.bgBitmap = bgBitmap;
		        startZoom.call(scope);
		    }, 0);
		};
		
		img.onerror = function() {
		    console.log("Fel: Kunde inte ladda bilden.");
		};
		
		function startZoom() {
		    var bg = this.bgBitmap;
		
		    if (!bg) {
		        console.log("Ingen bakgrundsbild hittad!");
		        return;
		    }
		
		    // 🔁 Zooma in och tillbaka i evig loop
		    function zoomLoop() {
		        createjs.Tween.get(bg)
		            .to({ scaleX: 1.08, scaleY: 1.08 }, 10000, createjs.Ease.quadInOut)
		            .to({ scaleX: 1.0, scaleY: 1.0 }, 10000, createjs.Ease.quadInOut)
		            .call(zoomLoop);
		    }
		
		    zoomLoop();
		};
		
		function laddaLoggor(scope) {
		    const loggor = [
		        {
		            url: "https://cdn.jsdelivr.net/gh/thechineseroom/banner_assets/images/byggforetagen_logo.png",
		            x: 89,
		            y: 739
		        },
		        {
		            url: "https://cdn.jsdelivr.net/gh/thechineseroom/banner_assets/images/bkma_logo.png",
		            x: 580,
		            y: 715 // t.ex. 20 pixlar längre ner
		        }
		    ];
		
		    loggor.forEach(info => {
		        const img = new Image();
		        img.src = info.url;
		        img.onload = function() {
		            const logo = new createjs.Bitmap(img);
		            logo.x = info.x;
		            logo.y = info.y;
		            scope.addChild(logo);
		        };
		    });
		}
		laddaLoggor(this);
		
		
		
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
	this.clickArea = new lib.ClickButton();
	this.clickArea.name = "clickArea";
	this.clickArea.setTransform(494.65,540,1.9375,4.32,0,0,0,255.3,125);
	new cjs.ButtonHelper(this.clickArea, 0, 1, 1);

	this.text3 = new cjs.Text(
		"Läs mer på byggforetagen.se", 
		  "43px 'CircularXX-Medium'",
  "#FFFFFF"
);
	this.text3.name = "text3";
	this.text3.lineHeight = 55;
	this.text3.lineWidth = 778;
	this.text3.parent = this;
	this.text3.setTransform(88,630.75);

	this.instance = new lib.WhiteborderMC();
	this.instance.setTransform(2365.75,540,1.1818,4.5);

	this.text2 = new lib.Text3MC_Link();
	this.text2.name = "text2";
	this.text2.setTransform(263,437.85,1,1,0,0,0,174,30.1);

	this.text1 = new lib.TestSymbol1();
	this.text1.name = "text1";
	this.text1.setTransform(86,108.95,1,1,0,0,0,-42,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1},{t:this.text2},{t:this.instance},{t:this.text3},{t:this.clickArea}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1412.3000000000002,540);
// library properties:
lib.properties = {
	id: 'FE62A4A6F090493DA9DC5A50C4BF5FA9',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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