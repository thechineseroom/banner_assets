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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgMgMAAgTQAAgQAMgNQANgNARAAQARAAANANQANANAAAQQAAASgNANQgMAMgSAAQgRAAgNgMg");
	this.shape.setTransform(557.025,289.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_1.setTransform(534.975,280.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhVBkQgogmAAg+QAAg7AmgoQAlglAyAAQA7AAAhAlQAiAjAAA+IgBATIi8AAQABAdAUATQAUATAcAAQAyAAAPgtIA0AQQgLAkgeAWQgfAYgtAAQg1AAgmglgABAgbQgBgZgQgQQgRgQgeAAQgagBgSATQgQAQgCAXIB+AAIAAAAg");
	this.shape_2.setTransform(504.95,280.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2DAIAAiZQAAg4g2AAQgXAAgPARQgNAPgBAaIAACXIg+AAIAAl/IA+AAIAACXQAZggAwAAQAtgBAaAeQAXAcAAArIAACkg");
	this.shape_3.setTransform(475.175,274.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXBiQgmgoAAg6QAAg6AmgoQAmgmA3AAQAwAAAhAbQAcAXAJAjIg3AUQgMgxgzAAQgcAAgUAVQgVAXAAAkQAAAlAVAXQAUAVAeAAQAbAAASgRQAOgMAFgTIA2AUQgKAigcAXQghAbgvAAQg4AAgngng");
	this.shape_4.setTransform(445.625,280.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKBtQgYgWgDgcIA2gPQABATANAMQAOANAXAAQASAAALgIQAKgJAAgMQAAgXgfgGIglgJQghgHgSgUQgSgTAAgcQAAgiAbgYQAcgZAnAAQAwAAAbAbQAUATAFAaIg1APQgFgngqAAQgPAAgLAJQgKAIAAANQAAAWAaAFIAmAIQBKAQAAA9QAAAhgYAXQgbAbgvAAQgwAAgegcg");
	this.shape_5.setTransform(418.45,280.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_6.setTransform(391.225,280.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgPQAAgogxAAQgWAAgPAOQgNANgCAUIg4gNQAEgjAcgXQAfgaAsAAQA5AAAcAdQAZAZAAArIAAB/QAAAZADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAUQgjAGAAAdQAAAOAKAKQAKAJASABQA/AAAAhDIAAgMg");
	this.shape_7.setTransform(361.375,280.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhLCDIAAkBIA9AAIAAApQASgtA3AAIARACIAAA/IgUgCQhFAAAABLIAAB7g");
	this.shape_8.setTransform(339.2,280.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFCaIAAAjIg9AAIAAl/IA9AAIAACeQAJgRAVgKQAXgMAbAAQA5AAAgAnQAfAkgBA6QABA8ghAmQghAng4AAQg2AAgYgpgAgyAAQgTAVAAAmQAAAlATAXQAUAWAeAAQAdAAAUgWQATgXAAglQAAgmgTgVQgSgVgfAAQgeAAgUAVg");
	this.shape_9.setTransform(312.6,274.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhLBtQgWgWgEgcIA2gPQACATAMAMQAPANAWAAQASAAALgIQAKgJAAgMQAAgXgfgGIgkgJQgigHgSgUQgSgTAAgcQAAgiAbgYQAcgZAnAAQAwAAAbAbQAUATAFAaIg1APQgFgngqAAQgPAAgLAJQgKAIAAANQAAAWAaAFIAmAIQBKAQAAA9QAAAhgYAXQgbAbgvAAQgwAAgfgcg");
	this.shape_10.setTransform(283.35,280.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_11.setTransform(254.575,285.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_12.setTransform(224.625,280.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeDDIAAkCIA9AAIAAECgAgbh9QgMgMAAgRQAAgQAMgMQAMgLAPAAQAQAAANALQALAMAAAQQAAARgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_13.setTransform(202.5,273.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_14.setTransform(180.625,280.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_15.setTransform(148.775,285.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_16.setTransform(117.275,285.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhZCjQgXgWAAggQAAghAWgVQAUgTAjgFIBCgKQATgDAAgQQAAgmgxAAQgWAAgPAOQgNAMgCAUIg4gMQAEgjAcgYQAfgZAsAAQA5AAAcAdQAZAZAAApIAACAQAAAaADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQBGQgjAGAAAdQAAAOAKAJQAKAKASAAQA/AAAAhCIAAgMgAAfh/QgKgKAAgOQAAgPAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAPQAAAOgKAKQgKAKgOAAQgOAAgKgKgAhKh/QgKgKAAgOQAAgPAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAPQAAAOgKAKQgKAKgPAAQgOAAgKgKg");
	this.shape_17.setTransform(87.775,275.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeDAIAAl/IA9AAIAAF/g");
	this.shape_18.setTransform(67.325,274.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_19.setTransform(45.425,280.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgPQAAgogxAAQgWAAgPAOQgNANgCAUIg4gNQAEgjAcgXQAfgaAsAAQA5AAAcAdQAZAZAAArIAAB/QAAAZADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAUQgjAGAAAdQAAAOAKAKQAKAJASABQA/AAAAhDIAAgMg");
	this.shape_20.setTransform(15.575,280.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA2DAIAAiYQAAg5g2AAQgXAAgPARQgNAPgBAaIAACXIg+AAIAAl/IA+AAIAACXQAZggAwAAQAtAAAaAdQAXAcAAArIAACkg");
	this.shape_21.setTransform(885.725,213.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhXBiQgmgoAAg6QAAg6AmgoQAmgmA3AAQAwAAAhAbQAcAXAJAjIg3AUQgMgwgzgBQgcAAgUAVQgVAWAAAlQAAAlAVAXQAUAVAeAAQAbAAASgRQAOgMAFgTIA2AUQgKAigcAXQghAbgvAAQg4AAgngng");
	this.shape_22.setTransform(856.175,220.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AheBiQgngnAAg7QAAg6AngnQAlgnA5AAQA5AAAnAnQAmAnAAA6QAAA8gmAmQgnAng5AAQg5AAglgngAgxg8QgWAXAAAlQAAAmAWAXQAUAVAdAAQAeAAAUgVQAWgWAAgnQAAglgWgXQgUgVgeAAQgdAAgUAVg");
	this.shape_23.setTransform(825.85,220.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhKAbIAAg1ICVAAIAAA1g");
	this.shape_24.setTransform(786.675,217.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_25.setTransform(759.225,225.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_26.setTransform(727.725,225.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhaC1IA+iHIhujiIBGAAIBJCjIBFijIBBAAIijFpg");
	this.shape_27.setTransform(698.3,225.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhFCaIAAAjIg9AAIAAl/IA9AAIAACeQAJgRAVgKQAXgMAbAAQA5AAAgAnQAeAkAAA6QAAA8ggAmQghAng4AAQg2AAgYgpgAgyAAQgTAVAAAmQAAAlATAXQAUAWAeAAQAdAAAUgWQATgXAAglQAAgmgTgVQgTgVgeAAQgfAAgTAVg");
	this.shape_28.setTransform(668.35,214.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ACGCFIAAidQAAg1gxAAQgYAAgPARQgPAQAAAZIAACYIg7AAIAAidQAAg1gyAAQgYAAgPARQgPAPAAAaIAACYIg9AAIAAkBIA7AAIAAAhQALgUAWgLQAVgKAXAAQA4AAAUAuQAbguA5AAQAmAAAZAYQAcAaAAAwIAACng");
	this.shape_29.setTransform(615.775,219.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AheBiQgngnAAg7QAAg6AngnQAlgnA5AAQA5AAAnAnQAmAnAAA6QAAA8gmAmQgnAng5AAQg5AAglgngAgxg8QgWAXAAAlQAAAmAWAXQAUAVAdAAQAeAAAUgVQAWgWAAgnQAAglgWgXQgUgVgeAAQgdAAgUAVg");
	this.shape_30.setTransform(577.05,220.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_31.setTransform(546.475,219.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeDDIAAkCIA9AAIAAECgAgbh9QgMgMAAgRQAAgQAMgMQAMgLAPAAQAQAAANALQALAMAAAQQAAARgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_32.setTransform(524.35,213.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_33.setTransform(488.125,225.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_34.setTransform(458.175,219.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeDDIAAkCIA9AAIAAECgAgbh9QgMgMAAgRQAAgQAMgMQAMgLAPAAQAQAAANALQALAMAAAQQAAARgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_35.setTransform(436.05,213.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgeDAIAAl/IA9AAIAAF/g");
	this.shape_36.setTransform(422.325,213.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhfCcQgjgmAAg7QAAg5AjglQAjgoA1AAQA5AAASAlIAAicIA8AAIAAFQQAAAaADAVIg7AAIgDgiQgWAog1AAQg3AAgigngAgwAAQgUAWAAAlQAAAlATAWQATAXAeAAQAfAAATgXQATgXAAglQAAgkgTgWQgTgVgeAAQgeAAgTAVg");
	this.shape_37.setTransform(398.825,214.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_38.setTransform(368.575,219.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgPQAAgogxAAQgWAAgPAOQgNAMgCAVIg4gNQAEgjAcgXQAfgaAsAAQA5AAAcAdQAZAaAAAqIAAB/QAAAZADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAUQgjAGAAAdQAAAOAKAKQAKAKASAAQA/AAAAhDIAAgMg");
	this.shape_39.setTransform(338.725,220.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA2DAIAAiYQAAg5g2AAQgXAAgPARQgNAPgBAaIAACXIg+AAIAAl/IA+AAIAACXQAZggAwAAQAtAAAaAdQAXAcAAArIAACkg");
	this.shape_40.setTransform(310.125,213.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AiBC2IAAllIA7AAIAAAjQAKgSAVgLQAXgMAbAAQA4AAAgAnQAgAkAAA7QgBA6ggAmQgiAng3AAQg1AAgZgjIAACBgAgxhpQgUAXAAAjQAAAlAUAVQATAXAeAAQAeAAAUgXQATgVAAglQAAgkgTgWQgUgWgeAAQgeAAgTAWg");
	this.shape_41.setTransform(279.6,224.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AiBC2IAAllIA7AAIAAAjQAKgSAVgLQAWgMAcAAQA4AAAhAnQAfAkAAA7QAAA6giAmQghAng3AAQg1AAgYgjIAACBgAgxhpQgUAXAAAjQAAAlAUAVQATAXAeAAQAfAAATgXQATgVAAglQAAgkgTgWQgTgWgfAAQgeAAgTAWg");
	this.shape_42.setTransform(247.5,224.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhZBnQgagdAAgsIAAiiIA+AAIAACXQAAAaAMAPQANASAbAAQAZAAAOgRQAOgPAAgaIAAiYIA9AAIAADSQAAAXADAYIg7AAIgCgcQgJARgVAJQgUAKgWAAQgtAAgbgeg");
	this.shape_43.setTransform(215.525,220.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhLCDIAAkBIA9AAIAAApQASgtA3AAIARACIAAA/IgUgCQhFAAAABLIAAB7g");
	this.shape_44.setTransform(179,220.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AheCUQgngnAAg8QAAg6AngmQAlgnA5AAQA5AAAnAnQAmAmAAA6QAAA8gmAnQgnAng5AAQg5AAglgngAgxgKQgWAVAAAmQAAAnAWAXQAUAVAdAAQAeAAAUgVQAWgXAAgnQAAgmgWgVQgUgVgeAAQgdAAgUAVgAAch/QgKgKABgOQgBgPAKgKQAKgKAOAAQAOAAALAKQAKAKgBAPQABAOgKAKQgLAKgOAAQgOAAgKgKgAhNh/QgJgKAAgOQAAgPAJgKQAKgKAOAAQAPAAAKAKQAKAKAAAPQAAAOgKAKQgKAKgPAAQgOAAgKgKg");
	this.shape_45.setTransform(152.1,215.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhKCDIAAkBIA7AAIAAApQATgtA4AAIAQACIAAA/IgVgCQhEAAAABLIAAB7g");
	this.shape_46.setTransform(127.95,220.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ACGCFIAAidQAAg1gxAAQgYAAgPARQgPAQAAAZIAACYIg7AAIAAidQAAg1gyAAQgYAAgPARQgPAPAAAaIAACYIg9AAIAAkBIA7AAIAAAhQALgUAWgLQAVgKAXAAQA4AAAUAuQAbguA5AAQAmAAAZAYQAcAaAAAwIAACng");
	this.shape_47.setTransform(80.875,219.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhfBiQgmgnAAg7QAAg6AmgnQAmgnA5AAQA6AAAmAnQAmAnAAA6QAAA8gmAmQgmAng6AAQg5AAgmgngAgyg8QgVAXAAAlQAAAmAVAXQAVAVAdAAQAeAAAUgVQAWgWAAgnQAAglgWgXQgUgVgeAAQgdAAgVAVg");
	this.shape_48.setTransform(42.15,220.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhKBtQgXgWgEgcIA2gPQACATAMAMQAOANAXAAQATAAAKgIQAKgJAAgMQAAgXgegGIgmgIQghgIgSgUQgSgTAAgcQAAgiAcgYQAbgZAnAAQAwAAAbAbQAUATAEAaIgzAPQgGgngqAAQgPAAgLAJQgKAIAAANQAAAWAaAFIAmAIQBKAQAAA9QAAAhgYAXQgbAbguAAQgyAAgdgcg");
	this.shape_49.setTransform(14.2,220.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMCWQgVgUAAglIAAiAIgvAAIAAg3IANAAQAnAAAAgpIAAgmIA4AAIAABPIA1AAIAAA3Ig1AAIAAB2QgBAgAhABIAWgCIAAAyQgOAGgZAAQgjAAgUgUg");
	this.shape_50.setTransform(871.75,156.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgQQAAgngxAAQgWAAgPAOQgNANgCAUIg4gNQAEgjAcgXQAfgaAsAAQA5AAAcAdQAZAaAAAqIAAB/QAAAZADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAKQAKAKASgBQA/AAAAhCIAAgMg");
	this.shape_51.setTransform(847.975,160);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_52.setTransform(819.375,159.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_53.setTransform(789.075,159.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgQQAAgngxAAQgWAAgPAOQgNANgCAUIg4gNQAEgjAcgXQAfgaAsAAQA5AAAcAdQAZAaAAAqIAAB/QAAAZADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAKQAKAKASgBQA/AAAAhCIAAgMg");
	this.shape_54.setTransform(759.225,160);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMCWQgVgUAAglIAAiAIgvAAIAAg3IANAAQAoAAAAgpIAAgmIA2AAIAABPIA2AAIAAA3Ig2AAIAAB2QABAgAgABIAVgCIAAAyQgNAGgYAAQgkAAgUgUg");
	this.shape_55.setTransform(722.75,156.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeDAIAAl/IA9AAIAAF/g");
	this.shape_56.setTransform(706.675,153.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgeDAIAAl/IA9AAIAAF/g");
	this.shape_57.setTransform(692.925,153.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgQQAAgngxAAQgWAAgPAOQgNANgCAUIg4gNQAEgjAcgXQAfgaAsAAQA5AAAcAdQAZAaAAAqIAAB/QAAAZADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAKQAKAKASgBQA/AAAAhCIAAgMg");
	this.shape_58.setTransform(671.475,160);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AA2DAIAAiYQAAg5g2AAQgXAAgPARQgNAPgBAaIAACXIg+AAIAAl/IA+AAIAACXQAZggAwgBQAtABAaAdQAXAcAAArIAACkg");
	this.shape_59.setTransform(630.075,153.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhXBhQgmgmAAg7QAAg6AmgoQAmgmA3AAQAwAAAhAbQAcAXAJAjIg3AUQgMgwgzgBQgcABgUAUQgVAWAAAlQAAAlAVAXQAUAVAeAAQAbAAASgRQAOgMAFgTIA2ATQgKAjgcAXQghAbgvAAQg4AAgngog");
	this.shape_60.setTransform(600.525,160);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhfBiQgmgnAAg7QAAg6AmgnQAmgnA5AAQA5AAAnAnQAmAnAAA6QAAA8gmAmQgnAng5AAQg5AAgmgngAgyg8QgVAXAAAlQAAAmAVAXQAVAVAdAAQAeAAAUgVQAWgXAAgmQAAglgWgXQgUgVgeAAQgdAAgVAVg");
	this.shape_61.setTransform(570.2,160);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_62.setTransform(526.825,159.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhVBkQgogmAAg/QAAg6AngoQAkglAyAAQA7AAAiAkQAhAkAAA+IgCASIi7AAQABAeAVATQATATAcAAQAyAAAPgtIAzAQQgKAkgdAWQghAYgsAAQg1AAgmglgABAgcQgBgYgPgPQgSgSgdABQgbgBgSATQgQAQgBAWIB9AAIAAAAg");
	this.shape_63.setTransform(496.8,160);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_64.setTransform(465.475,165.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhaC1IA+iHIhujiIBGAAIBJCjIBFijIBBAAIijFpg");
	this.shape_65.setTransform(436.05,165.225);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMCWQgVgUAAglIAAiAIgvAAIAAg3IANAAQAoAAAAgpIAAgmIA3AAIAABPIA1AAIAAA3Ig1AAIAAB2QAAAgAgABIAWgCIAAAyQgOAGgYAAQgkAAgUgUg");
	this.shape_66.setTransform(411.25,156.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAvDAIhLhpIggAhIAABIIg9AAIAAl/IA9AAIAADmIBihoIBSAAIhqBsIBsCVg");
	this.shape_67.setTransform(389.25,153.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhKCDIAAkBIA7AAIAAApQATgtA4AAIAQACIAAA/IgVgCQhEAAAABLIAAB7g");
	this.shape_68.setTransform(364.65,159.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhVBkQgogmAAg/QAAg6AmgoQAlglAyAAQA7AAAhAkQAiAkAAA+IgBASIi8AAQABAeAUATQAUATAcAAQAyAAAPgtIA0AQQgLAkgeAWQgfAYgtAAQg2AAglglgABAgcQgBgYgQgPQgRgSgeABQgagBgSATQgQAQgCAWIB+AAIAAAAg");
	this.shape_69.setTransform(338.55,160);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgcCBIhpkBIBEAAIBDC3IBDi3IBBAAIhlEBg");
	this.shape_70.setTransform(309.375,160);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgnA0QASgEAOgQQANgRABgTQgFACgHAAQgSAAgLgLQgLgLAAgSQAAgRAMgMQANgLATAAQAUAAANAPQAOAQAAAZQAAAxgeAfQgXAZggAEg");
	this.shape_71.setTransform(275.075,173.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgQQAAgngxAAQgWAAgPAOQgNANgCAUIg4gNQAEgjAcgXQAfgaAsAAQA5AAAcAdQAZAaAAAqIAAB/QAAAZADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAKQAKAKASgBQA/AAAAhCIAAgMg");
	this.shape_72.setTransform(253.175,160);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_73.setTransform(224.575,159.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhLCDIAAkBIA9AAIAAApQASgtA3AAIARACIAAA/IgUgCQhFAAAABLIAAB7g");
	this.shape_74.setTransform(200.7,159.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhVBkQgogmAAg/QAAg6AngoQAkglAyAAQA7AAAiAkQAhAkAAA+IgCASIi7AAQABAeAVATQATATAcAAQAyAAAPgtIAzAQQgKAkgdAWQghAYgsAAQg1AAgmglgABAgcQgBgYgPgPQgRgSgeABQgbgBgSATQgQAQgBAWIB9AAIAAAAg");
	this.shape_75.setTransform(174.6,160);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhfCcQgjgmAAg7QAAg5AjglQAjgoA1AAQA5AAASAlIAAicIA8AAIAAFQQAAAaADAVIg7AAIgDgiQgWAog1AAQg3AAgigngAgwAAQgUAWAAAlQAAAlATAWQATAXAeAAQAfAAATgXQATgXAAglQAAgkgTgWQgTgVgeAAQgeAAgTAVg");
	this.shape_76.setTransform(143.225,154.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhfBiQgmgnAAg7QAAg6AmgnQAmgnA5AAQA6AAAmAnQAmAnAAA6QAAA8gmAmQgmAng6AAQg5AAgmgngAgyg8QgVAXAAAlQAAAmAVAXQAVAVAdAAQAeAAAUgVQAWgXAAgmQAAglgWgXQgUgVgeAAQgdAAgVAVg");
	this.shape_77.setTransform(112.45,160);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMCWQgVgUAAglIAAiAIgvAAIAAg3IANAAQAoAAAAgpIAAgmIA3AAIAABPIA1AAIAAA3Ig1AAIAAB2QAAAgAgABIAWgCIAAAyQgOAGgYAAQgkAAgUgUg");
	this.shape_78.setTransform(86.8,156.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhVBkQgogmAAg/QAAg6AmgoQAlglAyAAQA7AAAhAkQAiAkAAA+IgBASIi8AAQABAeAUATQAUATAcAAQAyAAAPgtIAzAQQgKAkgeAWQgfAYgtAAQg1AAgmglgABAgcQgBgYgQgPQgQgSgeABQgbgBgSATQgQAQgBAWIB9AAIAAAAg");
	this.shape_79.setTransform(62.85,160);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("ACGCFIAAidQAAg1gxAAQgYAAgPARQgPAQAAAZIAACYIg7AAIAAidQAAg1gyAAQgYAAgPARQgPAPAAAaIAACYIg9AAIAAkBIA7AAIAAAhQALgUAWgLQAVgKAXAAQA4AAAUAuQAbguA5AAQAmAAAZAYQAcAaAAAwIAACng");
	this.shape_80.setTransform(25.175,159.625);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AhZC1QgXgWAAggQAAghAWgUQAUgUAjgFIBCgKQATgDAAgQQAAgmgxAAQgWAAgPAOQgNAMgCAUIg4gMQAEgjAcgXQAfgaAsAAQA5AAAcAdQAZAaAAApIAAB/QAAAaADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQBZQgjAFAAAdQAAAOAKAJQAKALASgBQA/AAAAhCIAAgMgAgphoQgSgRAAgYQAAgaASgQQASgRAXAAQAZAAARARQASAQAAAaQAAAYgSARQgRARgZAAQgXAAgSgRgAgQiiQgGAGAAALQAAAJAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgJQAAgLgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_81.setTransform(832.975,93);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AiBC2IAAllIA7AAIAAAjQAKgSAVgLQAWgMAcAAQA4AAAhAnQAfAkAAA7QAAA6giAmQghAng3AAQg1AAgYgjIAACBgAgxhpQgUAXAAAjQAAAlAUAVQATAXAeAAQAfAAATgXQATgVAAglQAAgkgTgWQgTgWgfAAQgeAAgTAWg");
	this.shape_82.setTransform(804.15,104.525);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgdDCIAAkAIA7AAIAAEAgAgbh9QgMgLAAgSQAAgQAMgMQALgLAQAAQARAAALALQAMAMAAAQQAAASgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_83.setTransform(767.65,93.25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgcCBIhpkBIBEAAIBDC3IBDi3IBBAAIhlEBg");
	this.shape_84.setTransform(746.375,99.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhLCDIAAkBIA9AAIAAApQASgtA3AAIAQACIAAA/IgTgCQhFAAAABLIAAB7g");
	this.shape_85.setTransform(710.75,99.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgQQAAgngxAAQgWAAgPAOQgNANgCAUIg4gMQAEgkAcgXQAfgaAsAAQA5AAAcAdQAZAaAAAqIAAB+QAAAaADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAJQAKALASgBQA/AAAAhCIAAgMg");
	this.shape_86.setTransform(684.825,99.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhKCDIAAkBIA8AAIAAApQASgtA4AAIAQACIAAA/IgVgCQhEAAAABLIAAB7g");
	this.shape_87.setTransform(662.65,99.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhVBlQgognAAg/QAAg6AngoQAkglAyAAQA7AAAiAkQAhAkAAA+IgCASIi7AAQABAeAVATQATATAcAAQAyAAAPgtIA0AQQgLAkgeAWQgfAYgtAAQg2AAglgkgABAgcQgBgYgPgPQgRgRgfAAQgaAAgSASQgQAQgCAWIB+AAIAAAAg");
	this.shape_88.setTransform(636.55,99.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AhLBtQgXgWgDgcIA2gPQABATANAMQAOANAXAAQASAAALgJQAKgIAAgMQAAgXgegGIglgIQgigIgSgTQgSgVAAgbQAAgiAbgYQAcgZAnAAQAwAAAbAaQAUAUAFAaIg0APQgGgngqAAQgPAAgLAJQgKAJAAAMQAAAWAaAFIAmAIQBKAQAAA9QAAAhgYAYQgbAagvAAQgxAAgegcg");
	this.shape_89.setTransform(609.4,99.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhZBnQgagdAAgsIAAiiIA+AAIAACXQAAAaAMAPQANASAbAAQAZAAAOgRQAOgPAAgaIAAiYIA9AAIAADSQAAAXADAYIg7AAIgCgcQgJARgVAJQgUAKgWAAQgtAAgbgeg");
	this.shape_90.setTransform(582.075,100.175);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAvDAIhLhpIggAhIAABIIg9AAIAAl/IA9AAIAADmIBihoIBSAAIhqBsIBsCVg");
	this.shape_91.setTransform(554.15,93.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AheBiQgngnAAg7QAAg6AngnQAlgnA5AAQA5AAAnAnQAmAnAAA6QAAA8gmAmQgnAng5AAQg5AAglgngAgxg8QgWAXAAAlQAAAmAWAXQAUAVAdAAQAeAAAUgVQAWgXAAgmQAAglgWgXQgUgUgegBQgdABgUAUg");
	this.shape_92.setTransform(522.6,99.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgmDBIAAjLIgtAAIAAg2IAtAAIAAgjQAAgrAZgZQAYgZAoAAQAWAAALAFIAAA1QgKgDgNAAQgmAAAAAnIAAAiIA8AAIAAA2Ig8AAIAADLg");
	this.shape_93.setTransform(497.725,93.375);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgQQAAgngxAAQgWAAgPAOQgNANgCAUIg4gMQAEgkAcgXQAfgaAsAAQA5AAAcAdQAZAaAAAqIAAB+QAAAaADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAJQAKALASgBQA/AAAAhCIAAgMg");
	this.shape_94.setTransform(460.475,99.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAvDAIhLhpIggAhIAABIIg9AAIAAl/IA9AAIAADmIBihoIBSAAIhqBsIBsCVg");
	this.shape_95.setTransform(434.1,93.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AhXBhQgmgmAAg7QAAg7AmgnQAmgmA3AAQAwAAAhAbQAcAXAJAjIg3AUQgMgwgzgBQgcABgUAUQgVAXAAAkQAAAlAVAXQAUAVAeAAQAbAAASgQQAOgNAFgTIA2ATQgKAjgcAXQghAbgvAAQg4AAgngog");
	this.shape_96.setTransform(403.825,99.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhVBlQgognAAg/QAAg6AngoQAkglAyAAQA7AAAiAkQAhAkAAA+IgCASIi7AAQABAeAVATQATATAcAAQAyAAAPgtIA0AQQgLAkgdAWQghAYgsAAQg1AAgmgkgABAgcQgBgYgPgPQgSgRgeAAQgaAAgSASQgQAQgCAWIB+AAIAAAAg");
	this.shape_97.setTransform(374.3,99.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgcCBIhpkBIBEAAIBDC3IBDi3IBBAAIhlEBg");
	this.shape_98.setTransform(345.125,99.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AhKBtQgYgWgDgcIA2gPQACATAMAMQAPANAWAAQATAAAKgJQAKgIAAgMQAAgXgegGIglgIQgigIgSgTQgSgVAAgbQAAgiAcgYQAbgZAnAAQAwAAAbAaQAUAUAEAaIgzAPQgGgngqAAQgPAAgLAJQgKAJAAAMQAAAWAaAFIAmAIQBKAQAAA9QAAAhgYAYQgbAaguAAQgyAAgdgcg");
	this.shape_99.setTransform(318.5,99.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_100.setTransform(289.725,104.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_101.setTransform(259.775,99.425);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgdDCIAAkAIA7AAIAAEAgAgbh9QgMgLAAgSQAAgQAMgMQALgLAQAAQAQAAAMALQAMAMAAAQQAAASgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_102.setTransform(237.65,93.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgeDAIAAl/IA9AAIAAF/g");
	this.shape_103.setTransform(223.925,93.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AhfCcQgjgmAAg7QAAg5AjglQAjgoA1AAQA5AAASAlIAAicIA8AAIAAFQQAAAaADAVIg7AAIgDgiQgWAog1AAQg3AAgigngAgwAAQgUAWAAAlQAAAlATAWQATAXAeAAQAfAAATgXQATgXAAglQAAgkgTgWQgTgVgeAAQgeAAgTAVg");
	this.shape_104.setTransform(200.425,93.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_105.setTransform(170.175,99.425);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgUQAUgTAjgFIBCgKQATgDAAgQQAAgngxAAQgWAAgPAOQgNANgCAUIg4gMQAEgkAcgXQAfgaAsAAQA5AAAcAdQAZAaAAAqIAAB+QAAAaADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAJQAKALASgBQA/AAAAhCIAAgMg");
	this.shape_106.setTransform(140.325,99.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AA2DAIAAiYQAAg5g2AAQgXAAgPARQgNAPgBAaIAACXIg+AAIAAl/IA+AAIAACXQAZggAwgBQAtABAaAdQAXAcAAAsIAACjg");
	this.shape_107.setTransform(111.725,93.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AiCC2IAAllIA8AAIAAAjQAKgSAVgLQAWgMAcAAQA4AAAhAnQAeAkAAA7QAAA6ggAmQgiAng3AAQg1AAgZgjIAACBgAgxhpQgUAXAAAjQAAAlAUAVQATAXAeAAQAfAAASgXQAUgVAAglQAAgkgUgWQgSgWgfAAQgeAAgTAWg");
	this.shape_108.setTransform(81.2,104.525);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AiBC2IAAllIA7AAIAAAjQAKgSAVgLQAXgMAbAAQA4AAAgAnQAfAkABA7QgBA6ggAmQgiAng3AAQg1AAgZgjIAACBgAgxhpQgUAXAAAjQAAAlAUAVQATAXAeAAQAeAAAUgXQATgVAAglQAAgkgTgWQgUgWgeAAQgeAAgTAWg");
	this.shape_109.setTransform(49.1,104.525);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhZBnQgagdAAgsIAAiiIA+AAIAACXQAAAaAMAPQANASAbAAQAZAAAOgRQAOgPAAgaIAAiYIA9AAIAADSQAAAXADAYIg7AAIgCgcQgJARgVAJQgUAKgWAAQgtAAgbgeg");
	this.shape_110.setTransform(17.125,100.175);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgVQAUgSAjgFIBCgKQATgCAAgRQAAgngxAAQgWAAgPAOQgNAMgCAVIg4gMQAEgkAcgYQAfgZAsAAQA5AAAcAdQAZAaAAApIAAB/QAAAaADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAJQAKAKASAAQA/AAAAhCIAAgMg");
	this.shape_111.setTransform(787.425,39.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgeDAIAAl/IA9AAIAAF/g");
	this.shape_112.setTransform(766.975,33.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgeDAIAAl/IA9AAIAAF/g");
	this.shape_113.setTransform(753.225,33.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AhVBlQgognAAg/QAAg6AngoQAkglAyAAQA7AAAiAkQAhAkAAA+IgCASIi7AAQABAeAVATQATATAcAAQAyAAAPgtIA0AQQgLAkgdAWQghAYgsAAQg2AAglgkgABAgcQgBgYgPgPQgSgRgeAAQgaAAgSASQgQAQgCAWIB+AAIAAAAg");
	this.shape_114.setTransform(731.6,39.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_115.setTransform(701.825,39.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhfBiQgmgnAAg7QAAg6AmgnQAmgnA5AAQA5AAAnAnQAmAnAAA6QAAA8gmAmQgnAng5AAQg5AAgmgngAgyg8QgVAXAAAlQAAAmAVAXQAVAVAdAAQAeAAAUgVQAWgXAAgmQAAglgWgXQgUgUgegBQgdABgVAUg");
	this.shape_116.setTransform(671,39.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgdDCIAAkAIA8AAIAAEAgAgbh9QgMgMAAgQQAAgRAMgMQALgMAQAAQAQAAAMAMQAMAMAAARQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_117.setTransform(648.6,33.05);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgMCWQgVgUAAglIAAiBIgvAAIAAg2IANAAQAoAAAAgoIAAgnIA3AAIAABPIA1AAIAAA2Ig1AAIAAB3QAAAgAgAAIAWgBIAAAzQgPAFgXAAQglAAgTgUg");
	this.shape_118.setTransform(631.65,35.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgVQAUgSAjgFIBCgKQATgCAAgRQAAgngxAAQgWAAgPAOQgNAMgCAVIg4gMQAEgkAcgYQAfgZAsAAQA5AAAcAdQAZAaAAApIAAB/QAAAaADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAJQAKAKASAAQA/AAAAhCIAAgMg");
	this.shape_119.setTransform(607.875,39.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_120.setTransform(579.275,39.225);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AhKBtQgXgWgEgcIA2gPQABATANAMQAOANAXAAQATAAAKgJQAKgIAAgMQAAgXgegGIgmgIQghgIgSgTQgSgVAAgbQAAgiAcgYQAbgZAnAAQAwAAAbAaQAUAUAEAaIg0APQgFgngqAAQgPAAgLAJQgKAJAAAMQAAAWAaAFIAmAIQBKAQAAA9QAAAhgYAYQgbAaguAAQgyAAgdgcg");
	this.shape_121.setTransform(538.8,39.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_122.setTransform(511.575,39.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AhVBlQgognAAg/QAAg6AmgoQAlglAyAAQA7AAAhAkQAiAkAAA+IgBASIi8AAQABAeAUATQAUATAcAAQAyAAAPgtIA0AQQgLAkgeAWQgfAYgtAAQg1AAgmgkgABAgcQgBgYgQgPQgRgRgeAAQgaAAgSASQgQAQgCAWIB+AAIAAAAg");
	this.shape_123.setTransform(481.55,39.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_124.setTransform(450.225,44.775);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AhZBxQgXgWAAggQAAghAWgVQAUgSAjgFIBCgKQATgCAAgRQAAgngxAAQgWAAgPAOQgNAMgCAVIg4gMQAEgkAcgYQAfgZAsAAQA5AAAcAdQAZAaAAApIAAB/QAAAaADAQIg5AAQgDgIAAgZQgZApg1AAQgnAAgZgYgAgQAVQgjAFAAAdQAAAOAKAJQAKAKASAAQA/AAAAhCIAAgMg");
	this.shape_125.setTransform(420.725,39.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgMCWQgVgUAAglIAAiBIgwAAIAAg2IAOAAQAoAAAAgoIAAgnIA2AAIAABPIA2AAIAAA2Ig2AAIAAB3QABAgAgAAIAVgBIAAAzQgNAFgYAAQglAAgTgUg");
	this.shape_126.setTransform(397.05,35.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AhVBlQgognAAg/QAAg6AmgoQAlglAyAAQA7AAAhAkQAiAkAAA+IgBASIi8AAQABAeAUATQAUATAcAAQAyAAAPgtIA0AQQgLAkgeAWQggAYgsAAQg1AAgmgkgABAgcQgBgYgQgPQgRgRgeAAQgaAAgSASQgQAQgCAWIB+AAIAAAAg");
	this.shape_127.setTransform(373.1,39.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AhLCDIAAkBIA9AAIAAApQASgtA3AAIARACIAAA/IgUgCQhFAAAABLIAAB7g");
	this.shape_128.setTransform(349.75,39.425);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AhfCUQgmgnAAg8QAAg6AmgmQAmgnA5AAQA5AAAnAnQAmAmAAA6QAAA8gmAnQgnAng5AAQg5AAgmgngAgygKQgVAVAAAmQAAAnAVAXQAVAVAdAAQAeAAAUgVQAWgXAAgnQAAgmgWgVQgUgVgeAAQgdAAgVAVgAAch/QgJgKAAgOQAAgPAJgKQAKgKAPAAQANAAAKAKQAKAKAAAPQAAAOgKAKQgKAKgNAAQgPAAgKgKgAhNh/QgJgKAAgOQAAgPAJgKQAKgKAOAAQAPAAAKAKQAKAKAAAPQAAAOgKAKQgKAKgPAAQgOAAgKgKg");
	this.shape_129.setTransform(322.85,34.625);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgmDBIAAjLIgtAAIAAg2IAtAAIAAgjQAAgrAZgZQAYgZAoAAQAWAAALAFIAAA1QgKgDgNAAQgmAAAAAnIAAAiIA8AAIAAA2Ig8AAIAADLg");
	this.shape_130.setTransform(297.975,33.175);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_131.setTransform(271.525,44.775);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AhYCeQghgagGgpIA5gOQAEAYARAQQASAPAaAAQBIAAAAhNIAAgbQgVAmg1AAQgzAAgigkQgigjAAg2QAAg1AhgkQAiglA0AAQA4AAAUAmIAAghIA7AAIAADpQAAA5geAjQgjAphDAAQgyAAgigcgAgthwQgTAUAAAhQAAAhASAUQATATAdAAQAeAAASgTQATgUAAghQAAghgTgUQgTgUgdAAQgcAAgTAUg");
	this.shape_132.setTransform(240.025,44.775);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AhaC1IA+iHIhujiIBGAAIBJCjIBFijIBBAAIijFpg");
	this.shape_133.setTransform(210.6,44.825);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("Ah/C8IAAl3ICBAAQA1AAAfAcQAeAcAAAtQAAAdgPAXQgPAVgaAIQAfAIASAYQATAYAAAhQAAAuggAdQghAdg0AAgAhACGIBAAAQAdAAARgPQARgOAAgZQAAgZgPgPQgRgPgdAAIhCAAgAhAgcIA6AAQAbAAAQgPQAQgOAAgXQAAgYgQgOQgRgOgbgBIg5AAg");
	this.shape_134.setTransform(180.575,33.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AhKCDIAAkBIA7AAIAAApQATgtA4AAIAPACIAAA/IgUgCQhEAAAABLIAAB7g");
	this.shape_135.setTransform(141.7,39.425);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AhVBlQgognAAg/QAAg6AmgoQAlglAyAAQA7AAAhAkQAiAkAAA+IgBASIi8AAQABAeAUATQAUATAcAAQAyAAAPgtIA0AQQgLAkgeAWQggAYgsAAQg1AAgmgkgABAgcQgBgYgQgPQgRgRgdAAQgbAAgSASQgQAQgBAWIB9AAIAAAAg");
	this.shape_136.setTransform(115.6,39.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AhfCcQgjgmAAg7QAAg5AjglQAjgoA1AAQA5AAASAlIAAicIA8AAIAAFQQAAAaADAVIg7AAIgDgiQgWAog1AAQg3AAgigngAgwAAQgUAWAAAlQAAAlATAWQATAXAeAAQAfAAATgXQATgXAAglQAAgkgTgWQgTgVgeAAQgeAAgTAVg");
	this.shape_137.setTransform(84.225,33.625);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AA2CFIAAiYQAAg5g2AAQgYAAgOASQgOAQAAAbIAACUIg+AAIAAkBIA8AAIAAAiQAYgqA0AAQAtAAAZAeQAXAcAAAsIAACjg");
	this.shape_138.setTransform(53.975,39.225);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhiCdQgpgmAAhCIAAj0IA/AAIAADxQAAAnAUAVQAVAWAjAAQAkAAAVgWQAUgVAAgnIAAjxIA/AAIAAD0QAABCgoAmQgmAjg+AAQg9AAglgjg");
	this.shape_139.setTransform(20.35,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text2MC, new cjs.Rectangle(0,0,949,310), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBdQgngoAAg1QAAg3AngnQAngmA2AAQA2AAAnAmQAoAoAAA2QAAA1goAoQgnAog2AAQg2AAgngog");
	this.shape.setTransform(876.075,199.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjMFGIAAqFIC+AAIAABXQAshdB8AAIA0AGIAADDQgcgGgjAAQhBAAgoAnQgtAuAABZIAAEag");
	this.shape_1.setTransform(834.05,179.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjsEaQg6g3AAhSQAAhSA3g0QA0gvBUgMICXgYQAvgHAAglQAAgegYgTQgagVgtAAQgwAAgfAdQgbAbgDAnIisgkQAHhQBCg9QBQhJCBAAQCUAABKBLQBABBAABuIAAE6QAAA+AIAnIiyAAQgGgaAAgvQg5Bbh9AAQhmAAg/g8gAgaA9QhJALAAA9QAABCBNAAQB1AAAAiBIAAgcg");
	this.shape_2.setTransform(768.675,179.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjqGHQhUhCgPheICugwQAKAwAlAcQAmAgA2AAQCfgBAAilIAAgeQgwBJh8AAQiAAAhWhaQhWhZAAiHQAAiCBUhbQBWheCCAAQCHAAArBQIAAhEIC9AAIAAI0QAACWhSBdQhcBoiqAAQiFAAhbhHgAhdj5QgqAoAAA/QAABCAoAnQAmAnA8AAQA9AAAmgnQAmgmAAhDQAAg/gpgoQgngog5AAQg5AAgnAog");
	this.shape_3.setTransform(692.625,192.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABqFLIAAlzQAAhvhqAAQguAAgdAgQgeAfAAAyIAAFxIjFAAIAAqFIC/AAIAABKQAZgrA2gZQAvgWA2AAQB0AAA+BLQA4BFAABxIAAGUg");
	this.shape_4.setTransform(616.4,178.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhiHfIAAqEIDFAAIAAKEgAhQkZQgjgiAAgwQAAgvAjgjQAhghAvAAQAvAAAjAhQAiAiAAAwQAAAwgiAiQgjAigvgBQgvABghgig");
	this.shape_5.setTransform(559.525,163.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhiHXIAAutIDFAAIAAOtg");
	this.shape_6.setTransform(523.125,164.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj7F/QhchgAAiVQAAiQBYhfQBZhgCIAAQCEAAAqBCIAAlaIDDAAIAAM5QAAA6AFA5Ii+AAIgFg+Qg0BNh4AAQiKAAhahfgAhkATQgsAsAABNQAABMAsAtQAoAoA8AAQA+AAAogoQAsgtAAhMQAAhNgsgsQgogmg+AAQg8AAgoAmg");
	this.shape_7.setTransform(462.675,165.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABqFLIAAlzQAAhvhqAAQguAAgdAgQgeAfAAAyIAAFxIjFAAIAAqFIC/AAIAABKQAZgrA2gZQAvgWA2AAQB0AAA+BLQA4BFABBxIAAGUg");
	this.shape_8.setTransform(385.45,178.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjsEaQg6g3AAhSQAAhSA3g0QA0gvBUgMICXgYQAvgHAAglQAAgegYgTQgagVgtAAQgwAAgfAdQgbAbgDAnIisgkQAHhQBCg9QBQhJCBAAQCUAABKBLQBABBAABuIAAE6QAAA+AIAnIiyAAQgGgaAAgvQg5Bbh9AAQhmAAg/g8gAgaA9QhJALAAA9QAABCBNAAQB1AAAAiBIAAgcg");
	this.shape_9.setTransform(310.275,179.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABqHXIAAl0QAAhvhqAAQgsAAgdAdQgdAcgDAuIAAF8IjFAAIAAutIDFAAIAAFRQA7g6BpAAQB5AABBBMQA6BEAABwIAAGWg");
	this.shape_10.setTransform(237.95,164.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlUHGIAAt8IC/AAIAABDQAXgjAwgWQA2gZBAAAQCKAABTBfQBQBdAACUQAACUhXBfQhWBgiHAAQh6AAg1hCIAAEqgAhkjsQgtAsAABNQAABMAtArQAoApA8AAQA+AAAogoQAtgrAAhNQAAhNgtgsQgogng+AAQg8AAgoAng");
	this.shape_11.setTransform(160.425,191.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlUHGIAAt8IC/AAIAABDQAXgjAwgWQA2gZBAAAQCKAABTBfQBQBdAACUQAACUhXBfQhWBgiHAAQh6AAg1hCIAAEqgAhkjsQgtAsAABNQAABMAtArQAoApA8AAQA+AAAogoQAtgrAAhNQAAhNgtgsQgogng+AAQg8AAgoAng");
	this.shape_12.setTransform(79.175,191.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjyD/QhAhFAAhsIAAmXIDFAAIAAFtQAAAxAbAfQAbAgAzAAQAxAAAcgfQAdgeABgxIAAlvIDFAAIAAIRQAABAAGA0Ii+AAIgEhBQgwBPh8AAQhzAAhDhLg");
	this.shape_13.setTransform(-1.65,180.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjdD8QhlhhAAicQAAiXBjhhQBchdCDAAQCWAABWBZQBXBYAACbIgFA8InAAAQADA2AsAkQAqAjA5AAQBjAAAfhVIClAvQgZBahKA3QhRA9h2AAQiKAAhghbgACEhMQgCgsgdgdQgjgkhAAAQg5AAgkAkQgfAfgEAqIECAAIAAAAg");
	this.shape_14.setTransform(913.9,44.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjMFGIAAqFIC/AAIAABXQAqhdB9AAIAzAGIAADDQgbgGgjAAQhBAAgoAnQgtAuAABZIAAEag");
	this.shape_15.setTransform(853.65,44.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtFwQg5g4AAhgIAAkUIhzAAIAAitIAhAAQBkAAAAhqIAAhTICvAAIAAC9IB/AAIAACtIh/AAIAADwQAABDBIAAQAXAAAdgFIAACjQgkAShDAAQhkAAg5g3g");
	this.shape_16.setTransform(797.975,35.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtFwQg5g4AAhgIAAkUIhzAAIAAitIAhAAQBkAAAAhqIAAhTICvAAIAAC9IB/AAIAACtIh/AAIAADwQAABDBIAAQAXAAAdgFIAACjQgkAShDAAQhkAAg5g3g");
	this.shape_17.setTransform(746.775,35.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjsGaQg6g4AAhRQAAhSA3g0QA0gwBUgMICXgYQAvgHAAglQAAgdgYgTQgagWgtABQgwAAgfAdQgbAagDAmIisgjQAHhQBCg8QBQhKCBAAQCUABBKBLQBABBAABsIAAE8QAAA+AIAmIiyAAQgGgZAAgwQg5Bch9AAQhmAAg/g8gAgaC8QhJAMAAA8QAABDBNAAQB1gBAAiAIAAgdgABOkqQgdgdAAgqQAAgqAdgdQAcgdAqAAQAqAAAdAdQAdAdAAAqQAAAqgdAdQgdAbgqAAQgqAAgcgbgAjQkqQgdgdAAgqQAAgqAdgdQAcgdAqAAQAqAAAdAdQAdAdAAAqQAAAqgdAdQgdAbgqAAQgqAAgcgbg");
	this.shape_18.setTransform(685.875,31.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiVGGIAABJIi/AAIAAusIDCAAIAAFkQAWgfAxgWQA1gXA+AAQCKAABTBgQBQBcAACTQAACVhXBfQhWBgiHAAQiBAAg1hYgAhnATQguArAABOQAABMAuAtQAoAoA+AAQA8AAAogoQAsgsAAhNQAAhOgsgrQgogmg8AAQg+AAgoAmg");
	this.shape_19.setTransform(612.675,30.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjyD/Qg/hFAAhsIAAmXIDFAAIAAFtQAAAxAaAfQAbAgAzAAQAxAAAcgfQAdgeAAgxIAAlvIDGAAIAAIRQAABAAHA0Ii+AAIgGhBQgvBPh8AAQhzAAhDhLg");
	this.shape_20.setTransform(501.7,45.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Aj7F/QhchhAAiUQAAiQBYhfQBZhgCIAAQCEAAAqBCIAAlaIDDAAIAAM5QAAA6AFA5Ii+AAIgFg9Qg0BMh4AAQiKAAhahfgAhkATQgsAsAABNQAABMAsAtQAoAoA8AAQA+AAAogoQAsgtAAhMQAAhNgsgsQgogmg+AAQg8AAgoAmg");
	this.shape_21.setTransform(421.075,30.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjMFGIAAqFIC+AAIAABXQArhdB9AAIAzAGIAADDQgbgGgjAAQhBAAgoAnQgtAuAABZIAAEag");
	this.shape_22.setTransform(328.6,44.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjzF2QhjhiAAiVQAAiUBjhhQBihgCRAAQCTAABhBgQBjBhAACUQAACWhjBhQhhBgiTAAQiRAAhihggAhjAHQguArABBNQgBBNAuAsQAoAoA7ABQA8AAApgoQAsgsABhOQgBhNgsgrQgogmg9gBQg7ABgoAmgABJkrQgdgcAAgqQAAgrAdgcQAdgdApAAQAqAAAeAdQAcAdAAAqQAAAqgcAcQgeAcgqAAQgpAAgdgcgAjWkrQgcgcAAgqQAAgrAcgcQAdgdAqAAQApAAAeAdQAdAdAAAqQAAAqgdAcQgeAcgpAAQgqAAgdgcg");
	this.shape_23.setTransform(260.75,31.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjqGGQhUhBgPheICugwQAKAvAlAeQAmAeA2ABQCfgBAAilIAAgeQgwBJh8AAQiAAAhWhaQhWhZAAiHQAAiCBUhbQBWheCCAAQCHAAArBQIAAhEIC9AAIAAI0QAACWhSBdQhcBoiqAAQiFAAhbhIgAhdj5QgqAoAAA/QAABCAoAnQAmAnA8AAQA9AAAmgnQAmgnAAhCQAAg/gpgoQgngng5AAQg5AAgnAng");
	this.shape_24.setTransform(180.025,57.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AjsHEQg6g4AAhRQAAhSA3g1QA0gvBUgNICXgXQAvgHAAglQAAgegYgUQgagUgtAAQgwAAgfAcQgbAbgDAnIisgjQAHhQBCg9QBQhJCBAAQCUAABKBMQBABBAABsIAAE8QAAA+AIAmIiyAAQgGgaAAgvQg5Bch9AAQhmAAg/g8gAgaDmQhJAMAAA8QAABCBNAAQB1AAAAiAIAAgdgAhtkDQgtgqAAg/QAAg/AtgqQAsgqA+AAQA9AAAsAqQAtAqAAA/QAAA/gtAqQgsAog9AAQg+AAgsgogAgzlsQAAAyAwAAQAvAAAAgyQAAgxgvAAQgwAAAAAxg");
	this.shape_25.setTransform(75.275,27.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AkEF9QhWhRgMhzIC8gtQAIBFAsAqQAzAwBYAAQA8gBAjgaQAjgaAAgsQAAhJhjgTIh9gYQh1gVhEhIQhChJAAhnQAAiABjhVQBfhUCHAAQCdAABaBTQBIBBASBjIi4AzQgIgrgegfQgqgphKAAQg3AAgkAfQgjAcAAAoQAABHBcARIB6AYQCAAXBHBMQBDBKABBnQgBBzhXBVQhgBbidgBQiuAAhohjg");
	this.shape_26.setTransform(0.05,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
		            x: 32,
		            y: 819
		        },
		        {
		            url: "https://cdn.jsdelivr.net/gh/thechineseroom/banner_assets/images/bkma_logo.png",
		            x: 500,
		            y: 795 // t.ex. 20 pixlar längre ner
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

	this.instance = new lib.WhiteborderMC();
	this.instance.setTransform(2365.75,540,1.1818,4.5);

	this.text2 = new lib.Text2MC();
	this.text2.name = "text2";
	this.text2.setTransform(206,450.25,1,1,0,0,0,174,30.1);

	this.text1 = new lib.TestSymbol1();
	this.text1.name = "text1";
	this.text1.setTransform(27.7,124.45,1,1,0,0,0,-42,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1},{t:this.text2},{t:this.instance},{t:this.clickArea}]}).wait(1));

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