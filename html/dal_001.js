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


(lib.SublineMC = function(mode,startPosition,loop,reversed) {
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
	this.txt = new cjs.Text("txt", "28px 'CircularXX Medium'", "#26A7FF");
	this.txt.name = "txt";
	this.txt.lineHeight = 36;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(0,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SublineMC, new cjs.Rectangle(-2,-28.7,104,38.5), null);


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

	// for_animate_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AL5B9QgmglAAg5QAAg4AmgmQAmgkA2AAQApAAAeATQAZAQANAaIg1AVQgQgegoAAQgdAAgUATQgYAVAAAmQAAAlAWAVQAUAUAgAAQAZAAARgMQARgLAEgUIA3AAIgEAQQgMAlgfAWQgeAUgpAAQg4AAglgkgAkVB+QgmglAAg6QAAg4AlglQAkgkA1gBIAAA2QgcACgTASQgVAVAAAiQAAAlAXAVQAUASAdAAQAfAAAVgVIApAnQgmAlg3AAQg2AAgmgjgArZB9QgmglAAg5QAAg4AmgmQAmgkA2AAQApAAAeATQAZARAOAaIg1AVQgQgfgpAAQgdAAgUATQgYAVAAAmQAAAlAWAVQAUAUAgAAQAXAAARgKQARgLAFgTIA3AAIgDANQgMAlgeAVQgfAVgpAAQg4AAglgkgAvsB9QgmglAAg5QAAg4AmgmQAlgkA3AAQApAAAeATQAZARAOAaIg1AVQgRgfgoAAQgeAAgUATQgXAVAAAmQAAAlAWAVQAUAUAgAAQAXAAAQgKQASgLAFgTIA3AAIgDANQgMAlgfAVQgeAVgpAAQg4AAglgkgAVOCcIidj6IBFAAIBbCVIAAiVIA4AAIAAD6gASxCcIAAjrIA4BXIAACUgAPrCcIAAj6ICgAAIAAA1IhoAAIAACQIBoAAIAAA1gAKdCcIhYj6IA3AAIBeD6gAGXCcIAAjFIg3AAIAAg1ICvAAIAAA1IhAAAIAADFgAC5CcIAAj6ICfAAIAAA1IhnAAIAACQIBnAAIAAA1gABoCcIgxhhIgSAAIAAgvIAbAAQARAAAKgIQAJgHAAgOQAAgOgJgHQgKgIgRAAIgbAAIAAgwIAmAAQAkAAAXAWQAWAWAAAhQAAAYgOATQgMARgUAHIA3BqgAgaCcIAAj6IA3AAIAAD6gAyQCcIAAhcIhXieIBCAAIBNCeIAABcgA2CCcIA2guIAdAAQAQAAAKgIQAJgIAAgNQAAgNgJgIQgKgIgQAAIgbAAIAAguIATAAQAOAAAJgIQAIgHAAgMQAAgLgIgHQgIgJgQAAIgUAAIg2guIBPAAQAlAAAXAUQAVATAAAcQAAATgIAOQgJAPgPAFQATAEAMAPQAOARAAAXQAAAfgVAUQgWAUgjAAgAnlCbIAAj6ICgAAIAAA1IhoAAIAADFgA2IhZIA2AvIAACTIg2AugAIkB5IASgzIBAAAIASAzgAiABPQAPgUAAgdQAAgigVgVQgTgSgcgCIAAg2QA1ABAkAkQAlAlAAA4QAAA0ggAkgAmmA/IAAgyIBRAAIAAAygAqHA+IAAgxICBAAQAEAZgDAYgAuaA+IAAgxICBAAQADAZgDAYgAQrA7IAAgxIBWAAIAAAxgAD5A7IAAgxIBRAAIAAAxgANLA6IAAgwICAAAQAFAZgDAXgAxuACIAwhgIA+AAIhTCWgAiVhxQgIgIAAgLQAAgMAIgIQAHgIAMAAQAMAAAIAIQAIAIAAAMQAAALgIAIQgIAIgMAAQgMAAgHgIgAkEhxQgIgIAAgLQAAgMAIgIQAIgIAMAAQALAAAJAIQAIAIAAAMQAAALgIAIQgJAIgLAAQgMAAgIgIg");
	this.shape.setTransform(141.725,16.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LogoMC, new cjs.Rectangle(0,0,283.5,32.3), null);


(lib.HeadlineMC = function(mode,startPosition,loop,reversed) {
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
	this.txt = new cjs.Text("Vi är ditt andra lag", "bold 28px 'CircularXX Black'", "#26A7FF");
	this.txt.name = "txt";
	this.txt.lineHeight = 36;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(0,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeadlineMC, new cjs.Rectangle(-2,-24.7,104,147.79999999999998), null);


// stage content:
(lib.dal_001 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
		
		/* ==========
		   Helpers (ANVÄND DESIGNMÅTT – INTE canvas.width)
		   ========== */
		const DESIGN_W = 1920;   // ← din Animate-scens bredd
		const DESIGN_H = 1080;   // ← din Animate-scens höjd
		
		const hasHeadline = !!(this.headline && this.headline.txt);
		const hasSubline  = !!(this.subline  && this.subline.txt);
		
		const warn = (msg) => { try { console.warn(msg); } catch(e){} };
		
		/* =========================
		   1) Bakgrund: EN färg (en rektangel)
		   ========================= */
		this.bg = new createjs.Shape();
		this.bg.graphics.beginFill("#CCCCCC").drawRect(0, 0, DESIGN_W, DESIGN_H);
		this.addChildAt(this.bg, 0);
		
		/* ====================================
		   2) Team-styles: bg + text + logo per lag
		   ==================================== */
		this.teamStyles = {
		  //aik:         { bg:"#000000", headline:"#FFEC25", subline:"#FFEC25", logo:"#FFEC25" },
		  dif:         { bg:"#000245", headline:"#63c2ed", subline:"#63c2ed", logo:"#63c2ed" },
		  hammarby:    { bg:"#448a57", headline:"#FFFFFF", subline:"#FFFFFF", logo:"#f6c747" },
		  sirius:      { bg:"#000000", headline:"#4b83b2", subline:"#4b83b2", logo:"#f8d351" },
		  bp:          { bg:"#de4d41", headline:"#000000", subline:"#000000", logo:"#d2ad5a" },
		  ifkgoteborg: { bg:"#2253b3", headline:"#FFFFFF", subline:"#FFFFFF", logo:"#f2af47" },
		  gais:        { bg:"#428555", headline:"#000000", subline:"#000000", logo:"#f9dd53" },
		  hacken:      { bg:"#000000", headline:"#edd74c", subline:"#edd74c", logo:"#edd74c" },
		  //norrkoping:  { bg:"#0057B8", headline:"#0057B8", subline:"#FFFFFF", logo:"#FFFFFF" },
		  //kalmar:      { bg:"#D50032", headline:"#D50032", subline:"#FFFFFF", logo:"#FFFFFF" },
		  //mjallby:     { bg:"#FFD100", headline:"#FFD100", subline:"#000000", logo:"#000000" },
		};
		
		/* ============================
		   3) Styla och positionera text (riktig centrering)
		   ============================ */
		if (hasHeadline) {
		  this.headline.txt.text = "Vi är\ndin andra\nklubb";
		  this.headline.txt.textAlign = "center";
		  this.headline.txt.x = 0;  this.headline.txt.y = 0;
		  this.headline.txt.font = "bold 120px 'CircularXX Black'";
		  this.headline.txt.multiline = true;
		  this.headline.txt.lineWidth = Math.round(DESIGN_W * 0.9);
		  this.headline.txt.lineHeight = 110;
		
		  this.headline.regX = 0; this.headline.regY = 0;
		  this.headline.x = DESIGN_W / 2;
		  this.headline.y = Math.round(DESIGN_H * 0.1);
		
		  //this.headline.shadow = new createjs.Shadow("rgba(0,0,0,0.25)", 0, 2, 6);
		} else {
		  warn("Saknar instans 'headline' eller 'headline.txt' på scenen.");
		}
		
		if (hasSubline) {
		  this.subline.txt.text =
		    "Framgång är störst när den delas av många.\n" +
		    "Är du en schysst byggare är vår klubb också din klubb.\n" +
		    "Du kommer aldrig att stå ensam.";
		  this.subline.txt.textAlign = "center";
		  this.subline.txt.x = 0;  this.subline.txt.y = 0;
		  this.subline.txt.font = "28px 'CircularXX Medium'";
		  this.subline.txt.multiline = true;
		  this.subline.txt.lineWidth = Math.round(DESIGN_W * 0.9);
		  this.subline.txt.lineHeight = 32;
		
		  this.subline.regX = 0; this.subline.regY = 0;
		  this.subline.x = DESIGN_W / 2;
		  this.subline.y = (this.headline ? this.headline.y + 400 : Math.round(DESIGN_H * 0.3));
		
		  //this.subline.shadow = new createjs.Shadow("rgba(0,0,0,0.15)", 0, 1, 4);
		} else {
		  warn("Saknar instans 'subline' eller 'subline.txt' på scenen.");
		}
		
		/* =====================================
		   4) Hjälpare: färga om loggan (vektor)
		   ===================================== */
		this.setLogoColor = (obj, color) => {
		  if (!obj) return;
		  if (obj.graphics && obj.graphics._fill) obj.graphics._fill.style = color;
		  if (obj.children && obj.children.length) {
		    for (let i = 0; i < obj.children.length; i++) this.setLogoColor(obj.children[i], color);
		  }
		};
		
		/* ============================
		   5) Logo: skala + positionera (höjdstyrd, reg = CENTER, med yOffset)
		   ============================ */
		this.positionLogo = ({
		  anchor = "center",
		  pad = 32,
		  heightPx = 54,
		  yOffset = 200
		} = {}) => {
		  if (!this.logo) return;
		
		  let b = this.logo.getBounds() || this.logo.nominalBounds;
		  if (!b) { b = { x:0, y:0, width: 300, height: 80 }; this.logo.setBounds(0,0,b.width,b.height); }
		
		  const regCX = b.x + b.width / 2;
		  const regCY = b.y + b.height / 2;
		  this.logo.regX = regCX; this.logo.regY = regCY;
		
		  const s = heightPx / b.height;
		  this.logo.scaleX = this.logo.scaleY = s;
		
		  const halfW = (b.width  * s) / 2;
		  const halfH = (b.height * s) / 2;
		
		  let x = DESIGN_W / 2, y = DESIGN_H / 2;
		  switch (anchor) {
		    case "topLeft":      x = pad + halfW;               y = pad + halfH;               break;
		    case "topRight":     x = DESIGN_W - pad - halfW;    y = pad + halfH;               break;
		    case "bottomLeft":   x = pad + halfW;               y = DESIGN_H - pad - halfH;    break;
		    case "bottomRight":  x = DESIGN_W - pad - halfW;    y = DESIGN_H - pad - halfH;    break;
		    case "center":       x = DESIGN_W / 2;              y = DESIGN_H / 2;              break;
		    case "belowSublineCenter": {
		      const lh = (this.subline && this.subline.txt && this.subline.txt.lineHeight) ? this.subline.txt.lineHeight : 32;
		      const lines = (this.subline && this.subline.txt && this.subline.txt.text) ? this.subline.txt.text.split('\n').length : 3;
		      const subBottom = (this.subline ? this.subline.y : DESIGN_H*0.3) + lh * lines;
		      x = DESIGN_W / 2;
		      y = subBottom + 40 + halfH;
		      break;
		    }
		  }
		
		  this.logo.x = x;
		  this.logo.y = y + yOffset;
		};
		
		/* ===============================
		   6) Applicera lag (BG + texter + logga)
		   =============================== */
		this.applyTeam = (teamKey) => {
		  const style = this.teamStyles[teamKey];
		  if (!style) { warn("Okänt lag: " + teamKey); return; }
		
		  // Bakgrund (enfärgad) i DESIGN-mått
		  this.bg.graphics.clear().beginFill(style.bg).drawRect(0, 0, DESIGN_W, DESIGN_H);
		
		  // Textfärger
		  if (hasHeadline) this.headline.txt.color = style.headline || "#FFFFFF";
		  if (hasSubline)  this.subline.txt.color  = style.subline  || "#FFFFFF";
		
		  // Logga: egen färg + position
		  if (this.logo) {
		    this.setLogoColor(this.logo, style.logo || style.headline || "#FFFFFF");
		    this.positionLogo({ anchor: "center", heightPx: 54, yOffset: 200 });
		  }
		
		  this.stage.update();
		};
		
		/* ===============================
		   7) Loop och styrning
		   =============================== */
		this.teamOrder = Object.keys(this.teamStyles);
		this.currentIndex = 0;
		this.loopIntervalMs = 3000;
		this._loopTimer = null;
		
		this.nextTeam = () => {
		  if (!this.teamOrder.length) return;
		  this.currentIndex = (this.currentIndex + 1) % this.teamOrder.length;
		  const key = this.teamOrder[this.currentIndex];
		  this.applyTeam(key);
		};
		
		this.startLoop = (ms) => {
		  if (ms) this.loopIntervalMs = ms;
		  this.stopLoop();
		  this._loopTimer = setInterval(() => this.nextTeam(), this.loopIntervalMs);
		};
		
		this.stopLoop = () => {
		  if (this._loopTimer) { clearInterval(this._loopTimer); this._loopTimer = null; }
		};
		
		this.setTeam = (teamKey, opts = { pauseLoop: false }) => {
		  if (opts.pauseLoop) this.stopLoop();
		  this.applyTeam(teamKey);
		  const idx = this.teamOrder.indexOf(teamKey);
		  if (idx >= 0) this.currentIndex = idx;
		};
		
		/* ==========================
		   8) Init (vänta på webfonter)
		   ========================== */
		const start = () => {
		  if (this.teamOrder.length) {
		    this.applyTeam(this.teamOrder[0]);
		    this.startLoop(3000);
		  } else {
		    warn("Inga lag i this.teamStyles.");
		  }
		};
		
		if (document.fonts && document.fonts.ready) {
		  document.fonts.ready.then(() => {
		    if (hasHeadline) console.log("Headline font:", this.headline.txt.font);
		    if (hasSubline)  console.log("Subline font:",  this.subline.txt.font);
		    start();
		  });
		} else {
		  start();
		}
		
		// OBS: HTML:en sköter Ticker (addEventListener("tick", stage))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.logo = new lib.LogoMC();
	this.logo.name = "logo";
	this.logo.setTransform(589,672,1,1,0,0,0,141.7,16.1);

	this.subline = new lib.SublineMC();
	this.subline.name = "subline";
	this.subline.setTransform(668.95,563,1,1,0,0,0,50,-9.5);

	this.headline = new lib.HeadlineMC();
	this.headline.name = "headline";
	this.headline.setTransform(716.95,422,1,1,0,0,0,50,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headline},{t:this.subline},{t:this.logo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1407.3,888.1,-638.3,-199.89999999999998);
// library properties:
lib.properties = {
	id: 'E70EBF7283014CCAA194A267093E2191',
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
an.compositions['E70EBF7283014CCAA194A267093E2191'] = {
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