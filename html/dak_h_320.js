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


(lib.HeadlineStrokeMC = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeadlineStrokeMC, new cjs.Rectangle(-143.2,-42.5,286.4,85.1), null);


(lib.HeadlineMCsolid = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.HeadlineMCsolid, new cjs.Rectangle(-2,-24.7,104,147.79999999999998), null);


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


(lib.HeadlineFillMC = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#221F20").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeadlineFillMC, new cjs.Rectangle(-140.2,-39.5,280.4,79.1), null);


(lib.HeadlineMCsep = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlashAICB
	this.headlineFill = new lib.HeadlineFillMC();
	this.headlineFill.name = "headlineFill";
	this.headlineFill.setTransform(50.5,49);

	this.headlineStroke = new lib.HeadlineStrokeMC();
	this.headlineStroke.name = "headlineStroke";
	this.headlineStroke.setTransform(50.5,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headlineStroke},{t:this.headlineFill}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeadlineMCsep, new cjs.Rectangle(-92.7,6.5,286.4,85.1), null);


// stage content:
(lib.dak_h_320 = function(mode,startPosition,loop,reversed) {
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
		   Design (320×320) + debug
		   ========== */
		const DESIGN_W = 320;
		const DESIGN_H = 320;
		const DEBUG_BOUNDS = false; // sätt till false när du är nöjd
		
		const hasHeadlineSep = !!this.headlineSep;                 // MC med headlineFill + headlineStroke
		const hasSubline     = !!(this.subline && this.subline.txt);
		const warn = (m)=>{ try{ console.warn(m);}catch(e){} };
		
		/* ==========
		   Bakgrund
		   ========== */
		this.bg = new createjs.Shape();
		this.bg.graphics.beginFill("#CCCCCC").drawRect(0,0,DESIGN_W,DESIGN_H);
		this.addChildAt(this.bg, 0);
		
		/* ==========
		   Team-styles
		   ========== */
		this.teamStyles = {
		  dif:         { bg:"#c92b2e", headlineFill:"#ffffff", headlineStroke:"#124a97", subline:"#ffffff", logo:"#ffffff" },
		  hammarby:    { bg:"#005fab", headlineFill:"#e83136", headlineStroke:"#ffdd00", subline:"#ffffff", logo:"#ffdd00" },
		  sirius:      { bg:"#cc2a30", headlineFill:"#ffffff", headlineStroke:"#00573f", subline:"#ffffff", logo:"#ffffff" },
		  bp:          { bg:"#000000", headlineFill:"#e72a30", headlineStroke:"#ffcc00", subline:"#ffffff", logo:"#ffcc00" },
		  ifkgoteborg: { bg:"#1e402f", headlineFill:"#038e53", headlineStroke:"#ffffff", subline:"#ffffff", logo:"#d9ab49" },
		  gais:        { bg:"#122145", headlineFill:"#ffd800", headlineStroke:"#ffffff", subline:"#ffffff", logo:"#ffed5b" },
		  hacken:      { bg:"#ffffff", headlineFill:"#1d519b", headlineStroke:"#ffd30f", subline:"#1d519b", logo:"#1d519b" },
		};
		
		/* ==========
		   Hjälpare
		   ========== */
		// Färga shapes rekursivt
		this.setMCColor = function(mc, hex) {
		  if (!mc) return;
		  if (mc.graphics && mc.graphics._fill) mc.graphics._fill.style = hex;
		  if (mc.children && mc.children.length) {
		    for (let i=0;i<mc.children.length;i++) this.setMCColor(mc.children[i], hex);
		  }
		};
		
		// Union-bounds i förälderns koordinatsystem (med barns transform)
		function getTransformedChildrenBounds(container){
		  if (!container || !container.children || !container.children.length) return null;
		  let minX=Infinity, minY=Infinity, maxX=-Infinity, maxY=-Infinity;
		  let found=false;
		
		  for (let i=0;i<container.children.length;i++){
		    const ch = container.children[i];
		    let b = ch.getBounds() || ch.nominalBounds;
		    if (!b) continue;
		
		    // transformera hörnen från child → container
		    const tl = ch.localToLocal(b.x,           b.y,            container);
		    const tr = ch.localToLocal(b.x+b.width,   b.y,            container);
		    const bl = ch.localToLocal(b.x,           b.y+b.height,   container);
		    const br = ch.localToLocal(b.x+b.width,   b.y+b.height,   container);
		
		    const xs = [tl.x,tr.x,bl.x,br.x];
		    const ys = [tl.y,tr.y,bl.y,br.y];
		
		    minX = Math.min(minX, ...xs);
		    minY = Math.min(minY, ...ys);
		    maxX = Math.max(maxX, ...xs);
		    maxY = Math.max(maxY, ...ys);
		    found = true;
		  }
		  if (!found) return null;
		  return { x:minX, y:minY, width:(maxX-minX), height:(maxY-minY) };
		}
		
		// Centrera ett MC horisontellt med regY=topp
		function centerMC(mc, centerX, topY) {
		  if (!mc) return;
		  // ta bounds från objektet självt (för vektor-headline) eller dess barn
		  let b = mc.getBounds() || mc.nominalBounds || getTransformedChildrenBounds(mc);
		  if (!b) { mc.setBounds(0,0,100,40); b = mc.getBounds(); }
		  mc.regX = b.x + b.width/2;
		  mc.regY = b.y;
		  mc.x = centerX;
		  mc.y = topY;
		  mc.scaleX = mc.scaleY = 1;
		  mc.rotation = 0; mc.skewX = mc.skewY = 0;
		}
		
		/* ==========
		   Subline: text, storlek, centrerad
		   ========== */
		if (hasSubline) {
		  // fontstorlek ställer du här:
		  this.subline.txt.font = "18px 'CircularXX Medium'";
		  this.subline.txt.text =
		    "Är du en schysst byggare\n" +
		    "är vår klubb också din klubb.\n" +
		    "Du kommer aldrig att stå ensam.";
		  // nollställ ev. tidigare transform på containern
		  this.subline.scaleX = this.subline.scaleY = 1;
		  this.subline.rotation = 0; this.subline.skewX = this.subline.skewY = 0;
		  this.subline.regX = 0; this.subline.regY = 0;
		
		  // centrering: själva Text-objektet får x=0 + textAlign=center
		  this.subline.txt.textAlign = "center";
		  this.subline.txt.textBaseline = "top";
		  this.subline.txt.x = 0;
		  this.subline.txt.lineWidth = Math.round(DESIGN_W * 0.9);
		  this.subline.txt.lineHeight = 18;
		
		  // placera containern i mitten topp-Y
		  this.subline.x = DESIGN_W/2;
		  this.subline.y = Math.round(DESIGN_H*0.17) + 100;
		}
		
		/* ==========
		   LOGGA: gruppera + debug-ram
		   ========== */
		if (!this.logoGroup) {
		  this.logoGroup = new createjs.Container();
		  this.addChild(this.logoGroup); // överst
		}
		// rensa och lägg in din logo-instans om den finns
		this.logoGroup.removeAllChildren();
		if (this.logo) {
		  this.logo.visible = true;
		  this.logo.alpha = 1;
		  this.logo.scaleX = this.logo.scaleY = 1;
		  this.logo.rotation = 0; this.logo.skewX = this.logo.skewY = 0;
		  this.logoGroup.addChild(this.logo);
		} else {
		  warn("Ingen instans 'logo' hittad på root.");
		}
		
		// valfri debugram för loggans bounds
		if (!this.logoDebug) {
		  this.logoDebug = new createjs.Shape();
		  this.addChild(this.logoDebug);
		}
		
		/* ==========
		   Positionera logga (höjd, maxbredd, förankring)
		   ========== */
		this.positionLogo = ({
		  anchor      = "bottomCenter",
		  pad         = 10,
		  heightPx    = 30,
		  maxWidthPx  = 250,
		  yOffset     = -20,
		  clamp       = true
		} = {}) => {
		  const target = this.logoGroup;
		  if (!target || !target.numChildren) return;
		
		  // bounds i gruppens lokala system, med hänsyn till barns transform
		  let b = target.getBounds() || target.nominalBounds || getTransformedChildrenBounds(target);
		  if (!b) { target.setBounds(0,0,300,80); b = target.getBounds(); }
		
		  // skala efter höjd men respektera maxbredd
		  const sH = (heightPx  != null) ? (heightPx  / b.height) : Infinity;
		  const sW = (maxWidthPx!= null) ? (maxWidthPx/ b.width ) : Infinity;
		  let s = Math.min(sH, sW);
		  if (!isFinite(s) || !(s>0)) s = 1;
		  target.scaleX = target.scaleY = s;
		
		  const halfW = (b.width*s)/2, halfH = (b.height*s)/2;
		
		  // reg=center i gruppens bounds
		  target.regX = b.x + b.width/2;
		  target.regY = b.y + b.height/2;
		
		  // placering
		  let x = DESIGN_W/2, y = DESIGN_H/2;
		  switch (anchor) {
		    case "topLeft":      x = pad + halfW;               y = pad + halfH;               break;
		    case "topRight":     x = DESIGN_W - pad - halfW;    y = pad + halfH;               break;
		    case "bottomLeft":   x = pad + halfW;               y = DESIGN_H - pad - halfH;    break;
		    case "bottomRight":  x = DESIGN_W - pad - halfW;    y = DESIGN_H - pad - halfH;    break;
		    case "bottomCenter": x = DESIGN_W/2;                y = DESIGN_H - pad - halfH;    break;
		    case "center":
		    default:             x = DESIGN_W/2;                y = DESIGN_H/2;                break;
		  }
		  y += yOffset;
		
		  if (clamp) {
		    x = Math.max(halfW + pad, Math.min(DESIGN_W - halfW - pad, x));
		    y = Math.max(halfH + pad, Math.min(DESIGN_H - halfH - pad, y));
		  }
		
		  target.x = x; target.y = y;
		
		  // debugram runt beräknade bounds (i scenens koordinater)
		  this.logoDebug.graphics.clear();
		  if (DEBUG_BOUNDS) {
		    // fyra hörn i målkoordinater (target → stage/root)
		    const tl = target.localToLocal(b.x,           b.y,            this);
		    const tr = target.localToLocal(b.x+b.width,   b.y,            this);
		    const bl = target.localToLocal(b.x,           b.y+b.height,   this);
		    const br = target.localToLocal(b.x+b.width,   b.y+b.height,   this);
		
		    const xs = [tl.x,tr.x,bl.x,br.x].sort((a,b)=>a-b);
		    const ys = [tl.y,tr.y,bl.y,br.y].sort((a,b)=>a-b);
		    const minX = xs[0], maxX = xs[3], minY = ys[0], maxY = ys[3];
		
		    this.logoDebug.graphics
		      .setStrokeStyle(1)
		      .beginStroke("#00FF88")
		      .drawRect(minX, minY, maxX-minX, maxY-minY)
		      .endStroke();
		  }
		};
		
		/* ==========
		   Applicera lag
		   ========== */
		this.applyTeam = (teamKey)=>{
		  const s = this.teamStyles[teamKey];
		  if (!s) { warn("Okänt lag: "+teamKey); return; }
		
		  // BG
		  this.bg.graphics.clear().beginFill(s.bg).drawRect(0,0,DESIGN_W,DESIGN_H);
		
		  // Rubrik (vektor: fill + stroke)
		  if (hasHeadlineSep) {
		    const hf = this.headlineSep.headlineFill;
		    const hs = this.headlineSep.headlineStroke;
		    if (hs) this.setMCColor(hs, s.headlineStroke || s.headlineFill || "#FFFFFF");
		    if (hf) this.setMCColor(hf, s.headlineFill   || "#FFFFFF");
		    centerMC(this.headlineSep, DESIGN_W/2, Math.round(DESIGN_H*0.17));
		  } else {
		    warn("Saknar instansen 'headlineSep' (MC med headlineFill/headlineStroke).");
		  }
		
		  // Subline
		  if (hasSubline) {
		    this.subline.txt.color = s.subline || "#FFFFFF";
		    // (x,y) sattes tidigare men vi kör igen för säkerhets skull:
		    this.subline.x = DESIGN_W/2;
		    this.subline.y = Math.round(DESIGN_H*0.17) + 135;
		  }
		
		  // Logga: färg + placering
		  if (this.logoGroup && this.logoGroup.numChildren) {
		    this.setMCColor(this.logoGroup, s.logo || s.headlineFill || "#FFFFFF");
		    this.positionLogo({
		      anchor: "bottomCenter",
		      pad: 10,
		      heightPx: 30,
		      maxWidthPx: 250,
		      yOffset: -20
		    });
		  }
		
		  this.stage.update();
		};
		
		/* ==========
		   Loop / styrning
		   ========== */
		this.teamOrder = Object.keys(this.teamStyles);
		this.currentIndex = 0;
		this.loopIntervalMs = 1200;
		this._loopTimer = null;
		
		this.nextTeam = ()=>{
		  if (!this.teamOrder.length) return;
		  this.currentIndex = (this.currentIndex + 1) % this.teamOrder.length;
		  this.applyTeam(this.teamOrder[this.currentIndex]);
		};
		this.startLoop = (ms)=>{
		  if (ms) this.loopIntervalMs = ms;
		  this.stopLoop();
		  this._loopTimer = setInterval(()=>this.nextTeam(), this.loopIntervalMs);
		};
		this.stopLoop = ()=>{
		  if (this._loopTimer) { clearInterval(this._loopTimer); this._loopTimer = null; }
		};
		this.setTeam = (key, opts={pauseLoop:false})=>{
		  if (opts.pauseLoop) this.stopLoop();
		  this.applyTeam(key);
		  const idx = this.teamOrder.indexOf(key);
		  if (idx>=0) this.currentIndex = idx;
		};
		
		/* ==========
		   Init
		   ========== */
		const start = ()=>{
		  if (this.teamOrder.length) { this.applyTeam(this.teamOrder[0]); this.startLoop(); }
		  else warn("Inga lag i this.teamStyles.");
		};
		if (document.fonts && document.fonts.ready) document.fonts.ready.then(start); else start();
		
		// OBS: HTML:en sköter Ticker (addEventListener("tick", stage))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.headlineSep = new lib.HeadlineMCsep();
	this.headlineSep.name = "headlineSep";
	this.headlineSep.setTransform(92.05,410,1,1,0,0,0,50.5,49);

	this.headline_solid = new lib.HeadlineMCsolid();
	this.headline_solid.name = "headline_solid";
	this.headline_solid.setTransform(487.95,386.95,1,1,0,0,0,50,49.2);

	this.logo = new lib.LogoMC();
	this.logo.name = "logo";
	this.logo.setTransform(589,672,1,1,0,0,0,141.7,16.1);

	this.subline = new lib.SublineMC();
	this.subline.name = "subline";
	this.subline.setTransform(668.95,563,1,1,0,0,0,50,-9.5);

	this.headline = new lib.HeadlineMC();
	this.headline.name = "headline";
	this.headline.setTransform(716.95,422,1,1,0,0,0,50,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headline},{t:this.subline},{t:this.logo},{t:this.headline_solid},{t:this.headlineSep}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(108.9,473.1,660.1,215.10000000000002);
// library properties:
lib.properties = {
	id: 'E70EBF7283014CCAA194A267093E2191',
	width: 320,
	height: 320,
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